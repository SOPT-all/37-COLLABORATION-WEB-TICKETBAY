import { useEffect, useRef } from "react";

/**
 * 바텀시트 드래그 훅에 전달되는 레이아웃 정보입니다.
 *
 * - `navigationHeight`: 상단 네비게이션 높이 (px)
 * - `headerHeight`: 네비게이션 바로 아래 헤더 높이 (px)
 * - `maxTranslate`: 바텀시트가 아래로 최대 내려갈 거리 (px, 보통 이미지 높이)
 */
interface BottomSheetDragOptions {
  navigationHeight: number;
  headerHeight: number;
  maxTranslate: number;
}

/**
 * 드래그 시작 시점의 스냅샷 좌표를 저장하기 위한 메트릭입니다.
 *
 * - `sheetY`: 드래그 시작 시 바텀시트의 translateY 값
 * - `touchY`: 드래그를 시작한 터치/마우스의 Y 좌표
 */
interface DragMetrics {
  sheetY: number;
  touchY: number;
}

// 드래그로 인식할 최소 이동 거리(px)
const MIN_DRAG_DISTANCE = 10;

/**
 * 헤더로만 드래그되고, content 영역은 스크롤되는 바텀시트 동작을 제공하는 훅입니다.
 *
 * 사용처에서는 `sheetRef`, `headerRef`, `contentRef`를 각 DOM 요소에 연결만 해주면 됩니다.
 * 드래그/스냅/스크롤 관련 이벤트 등록과 바디 스크롤 잠금은 모두 이 훅 내부에서 처리합니다.
 */
const useBottomSheetDrag = ({
  navigationHeight,
  headerHeight,
  maxTranslate,
}: BottomSheetDragOptions) => {
  const sheetRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  // 바텀시트가 차지하는 영역의 시작 지점 (Navigation + Header 높이)
  // 옵션 값이 변경될 일이 거의 없으므로 useRef에 저장하여 마운트 시 한 번만 등록
  const optionsRef = useRef({
    BOTTOM_SHEET_START_Y: navigationHeight + headerHeight,
    MIN_TRANSLATE: 0, // 완전히 올라온 상태
    MAX_TRANSLATE: maxTranslate, // 최대 내려간 상태
  });

  // 드래그 시작 시점의 바텀시트/포인터 위치 스냅샷
  const metrics = useRef<DragMetrics>({
    sheetY: 0,
    touchY: 0,
  });

  // 드래그(터치 + 마우스) 처리
  useEffect(() => {
    let isDragging = false;
    let hasMoved = false;

    /**
     * 현재 translateY 위치를 기반으로 스냅할 위치를 계산합니다.
     * 현재는 2단 스냅(완전히 올림 / 완전히 내림)을 지원하며,
     * 향후 3단 이상의 스냅 포인트 추가가 가능하도록 함수로 분리했습니다.
     */
    const getSnapPoint = (currentTranslateY: number): number => {
      const { MIN_TRANSLATE, MAX_TRANSLATE } = optionsRef.current;
      const midPoint = (MIN_TRANSLATE + MAX_TRANSLATE) / 2;

      // 중간점을 기준으로 위쪽이면 올림, 아래쪽이면 내림
      return currentTranslateY < midPoint ? MIN_TRANSLATE : MAX_TRANSLATE;
    };

    const startDrag = (startY: number) => {
      if (!sheetRef.current) {
        return;
      }

      isDragging = true;
      hasMoved = false;

      const metric = metrics.current;
      const rectY = sheetRef.current.getBoundingClientRect().y;
      // 현재 translateY = 실제 Y좌표 - BOTTOM_SHEET_START_Y
      metric.sheetY = rectY - optionsRef.current.BOTTOM_SHEET_START_Y;
      metric.touchY = startY;

      // body 스크롤 방지
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    };

    const moveDrag = (currentY: number) => {
      if (!isDragging || !sheetRef.current) {
        return;
      }

      const { sheetY, touchY } = metrics.current;

      // 최소 드래그 거리 체크
      const dragDistance = Math.abs(currentY - touchY);
      if (dragDistance > MIN_DRAG_DISTANCE) {
        hasMoved = true;
      }

      const offset = currentY - touchY;
      let nextTranslateY = sheetY + offset;

      // 범위 제한
      if (nextTranslateY < optionsRef.current.MIN_TRANSLATE) {
        nextTranslateY = optionsRef.current.MIN_TRANSLATE;
      }
      if (nextTranslateY > optionsRef.current.MAX_TRANSLATE) {
        nextTranslateY = optionsRef.current.MAX_TRANSLATE;
      }

      sheetRef.current.style.setProperty("transform", `translateY(${nextTranslateY}px)`);
      sheetRef.current.style.setProperty("transition", "none");
    };

    const endDrag = () => {
      if (!isDragging) {
        return;
      }

      const didMove = hasMoved;

      isDragging = false;
      document.body.style.overflow = "";
      document.body.style.touchAction = "";

      // 실제로 드래그하지 않았으면 아무것도 하지 않음 (토글하지 않음)
      if (!didMove) {
        if (sheetRef.current) {
          sheetRef.current.style.setProperty("transition", "transform 0.3s ease-out");
        }
        metrics.current = {
          sheetY: 0,
          touchY: 0,
        };
        return;
      }

      if (sheetRef.current) {
        sheetRef.current.style.setProperty("transition", "transform 0.3s ease-out");

        const currentSheetY = sheetRef.current.getBoundingClientRect().y;
        const currentTranslateY = currentSheetY - optionsRef.current.BOTTOM_SHEET_START_Y;

        // 스냅 포인트 계산 및 적용
        const snapPoint = getSnapPoint(currentTranslateY);
        sheetRef.current.style.setProperty("transform", `translateY(${snapPoint}px)`);
      }

      metrics.current = {
        sheetY: 0,
        touchY: 0,
      };
    };

    // 터치 이벤트 핸들러 (헤더에서만 드래그 시작)
    const handleTouchStart = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (!headerRef.current || !headerRef.current.contains(target)) {
        return;
      }
      startDrag(e.touches[0].clientY);
      e.preventDefault();
      e.stopPropagation();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) {
        return;
      }
      moveDrag(e.touches[0].clientY);
      e.preventDefault();
      e.stopPropagation();
    };

    const handleTouchEnd = () => {
      if (isDragging) {
        endDrag();
      }
    };

    // 마우스 이벤트 핸들러 (헤더에서만 드래그 시작)
    const handleMouseDown = (e: MouseEvent) => {
      // 왼쪽 버튼만 처리
      if (e.button !== 0) {
        return;
      }

      const target = e.target as HTMLElement;
      if (!headerRef.current || !headerRef.current.contains(target)) {
        return;
      }

      startDrag(e.clientY);
      e.preventDefault();
      e.stopPropagation();

      // 마우스가 헤더를 벗어나도 계속 추적하기 위해 전역 리스너 활성화
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        moveDrag(e.clientY);
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        endDrag();
      }
      // 전역 리스너 제거
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    // 이벤트 리스너 등록
    const sheetElement = sheetRef.current;
    sheetElement?.addEventListener("touchstart", handleTouchStart, { passive: false });
    sheetElement?.addEventListener("touchmove", handleTouchMove, { passive: false });
    sheetElement?.addEventListener("touchend", handleTouchEnd, { passive: false });
    sheetElement?.addEventListener("mousedown", handleMouseDown);

    return () => {
      sheetElement?.removeEventListener("touchstart", handleTouchStart);
      sheetElement?.removeEventListener("touchmove", handleTouchMove);
      sheetElement?.removeEventListener("touchend", handleTouchEnd);
      sheetElement?.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  // content 영역에서 스크롤 처리 (모바일 터치 + 데스크톱 휠)
  useEffect(() => {
    // 터치 이벤트: content 영역에서 body 스크롤 방지
    const handleContentTouchMove = (e: TouchEvent) => {
      if (contentRef.current && contentRef.current.contains(e.target as Node)) {
        e.stopPropagation();
      }
    };

    document.addEventListener("touchmove", handleContentTouchMove, { passive: false });

    // 데스크톱 휠 스크롤을 bottomSheet 전체에서 받아서 content로 전달
    const sheetElement = sheetRef.current;

    const handleWheel = (e: WheelEvent) => {
      const contentElement = contentRef.current;
      if (!contentElement) {
        return;
      }

      // 기본 스크롤(바디 스크롤) 막고 content에만 스크롤 적용
      e.preventDefault();
      contentElement.scrollTop += e.deltaY;
    };

    sheetElement?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      document.removeEventListener("touchmove", handleContentTouchMove);
      sheetElement?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return {
    sheetRef,
    headerRef,
    contentRef,
  };
};
export default useBottomSheetDrag;
