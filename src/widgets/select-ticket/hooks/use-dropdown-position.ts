import { type RefObject, useEffect, useLayoutEffect, useState } from "react";

import { DROPDOWN_POSITION } from "@widgets/select-ticket/constants/dropdown-position";

interface DropdownPosition {
  top: number;
  left: number;
}

/**
 * 드롭다운의 위치를 계산하고 CSS 변수로 설정하는 커스텀 훅
 *
 * 이 훅이 필요한 이유:
 * - 드롭다운이 캐러셀(가로 스크롤) 컨테이너 안에서 사용되므로 `position: fixed`로 최상단에 띄워야합니다.
 * - 바텀시트의 좌우 padding(1.6rem)을 고려하여 드롭다운이 경계를 벗어나지 않도록 조정
 * - 화면 크기나 스크롤 위치가 변경될 때 드롭다운 위치를 자동으로 업데이트합니다.
 * - 이때 padding으로 설정된 좌우 여백을 고려하여 드롭다운이 경계를 벗어나지 않도록 조정합니다.
 * - `useLayoutEffect`를 사용하여 브라우저가 화면을 그리기 전에 CSS 변수를 설정하여 깜빡임 방지합니다.
 *
 * @param isOpen - 드롭다운이 열려있는지 여부
 * @param containerRef - 드롭다운 버튼 컨테이너 ref
 * @param dropdownListRef - 드롭다운 리스트 ref
 * @returns 계산된 드롭다운 위치
 */
export const useDropdownPosition = (
  isOpen: boolean,
  containerRef: RefObject<HTMLDivElement | null>,
  dropdownListRef: RefObject<HTMLDivElement | null>,
): DropdownPosition | null => {
  const [position, setPosition] = useState<DropdownPosition | null>(null);

  useEffect(() => {
    if (!isOpen || !containerRef.current) {
      return;
    }

    const calculatePosition = (): DropdownPosition | null => {
      if (!containerRef.current) {
        return null;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const { DROPDOWN_WIDTH, ROOT_MAX_WIDTH, BOTTOM_SHEET_PADDING, BUTTON_DROPDOWN_GAP } =
        DROPDOWN_POSITION;

      const viewportWidth = window.innerWidth;
      const containerWidth = Math.min(viewportWidth, ROOT_MAX_WIDTH);

      // root 컨테이너가 가운데 정렬되어 있을 때의 왼쪽 마진 계산
      // 데스크톱처럼 viewportWidth > ROOT_MAX_WIDTH인 경우를 고려
      const rootLeftOffset = (viewportWidth - containerWidth) / 2;

      // 드롭다운이 화면 밖으로 나가는지 체크합니다.
      // rect.left는 뷰포트 기준이므로 root 컨테이너 기준으로 변환
      let left = rect.left;
      // root 컨테이너의 오른쪽 경계에서 드롭다운 너비와 padding을 뺀 값
      const maxLeft = rootLeftOffset + containerWidth - DROPDOWN_WIDTH - BOTTOM_SHEET_PADDING;
      // root 컨테이너의 왼쪽 경계에서 padding을 더한 값
      const minLeft = rootLeftOffset + BOTTOM_SHEET_PADDING;

      if (left + DROPDOWN_WIDTH > rootLeftOffset + containerWidth - BOTTOM_SHEET_PADDING) {
        // 오른쪽으로 넘어가면 왼쪽으로 조정합니다.
        left = maxLeft;
      }
      // 왼쪽으로 넘어가면 padding만큼 여백 유지합니다.
      if (left < minLeft) {
        left = minLeft;
      }

      return {
        top: rect.bottom + BUTTON_DROPDOWN_GAP,
        left,
      };
    };

    const updatePosition = () => {
      const newPosition = calculatePosition();
      if (!newPosition) {
        return;
      }

      setPosition(newPosition);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
      setPosition(null);
    };
  }, [isOpen, containerRef]);

  // position이 변경되거나 dropdownListRef가 마운트될 때 CSS 변수를 설정합니다.
  useLayoutEffect(() => {
    if (!position || !dropdownListRef.current) {
      return;
    }

    dropdownListRef.current.style.setProperty("--dropdown-top", `${position.top}px`);
    dropdownListRef.current.style.setProperty("--dropdown-left", `${position.left}px`);
  }, [position, dropdownListRef]);

  return position;
};
