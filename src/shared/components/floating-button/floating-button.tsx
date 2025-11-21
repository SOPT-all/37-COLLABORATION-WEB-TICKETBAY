import { ChevronBigTopIcon, FabIcon } from "@assets/icons";

import * as styles from "./floating-button.css";

const FloatingButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.floatingButtonContainer}>
      {/* 위 버튼: 최상단 이동 */}
      <button
        type="button"
        className={styles.floatingButtonTop}
        onClick={handleScrollToTop}
        aria-label="최상단으로 이동"
        style={{ pointerEvents: "auto" }}
      >
        <ChevronBigTopIcon className={styles.icon} />
      </button>

      {/* 아래 버튼: 고객센터 문의 */}
      <button
        type="button"
        className={styles.floatingButtonHelp}
        aria-label="1:1 문의하기"
        style={{ pointerEvents: "auto" }}
      >
        <FabIcon className={styles.icon} />
      </button>
    </div>
  );
};

export default FloatingButton;
