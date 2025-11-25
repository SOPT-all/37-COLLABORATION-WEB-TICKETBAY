import { useEffect } from "react";
import { createPortal } from "react-dom";

import { ChevronSmallRightIcon, TicketbayTextLogoIcon } from "@assets/icons";

import * as styles from "./sidebar.css";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <>
      <div className={styles.sidebarDim} onClick={onClose} />
      <aside className={styles.sidebarContainer}>
        <header className={styles.sidebarHeader}>
          <div className={styles.sidebarLogo}>
            <TicketbayTextLogoIcon width={106} height={12} />
          </div>
        </header>
        <div className={styles.sidebarItemContainer}>
          <button type="button" className={styles.loginMenuItem}>
            <span>로그인하세요</span>
            <ChevronSmallRightIcon width={20} height={20} />
          </button>
          <button type="button" className={styles.menuItem}>MY</button>
          <button type="button" className={styles.menuItem}>판매등록</button>
          <button type="button" className={styles.menuItem}>PIN 번호함</button>
          <button type="button" className={styles.menuItem}>1:1 문의하기</button>
          <button type="button" className={styles.menuItem}>1:1 문의 내역</button>
          <button type="button" className={styles.menuItem}>이용 가이드</button>
        </div>
      </aside>
    </>,
    document.body
  );
};

export default Sidebar;

