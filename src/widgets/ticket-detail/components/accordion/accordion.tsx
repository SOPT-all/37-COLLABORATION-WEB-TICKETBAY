import { useState } from "react";
import type { ReactNode } from "react";

import { CheckIcon, ChevronSmallDownIcon, ChevronSmallUpIcon } from "@assets/icons";

import * as styles from "./accordion.css";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

const AccordionItem = ({ title, children }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section className={styles.accordionSection}>
      <button type="button" className={styles.headerButton} onClick={handleToggle}>
        <div className={styles.headerLeft}>
          <span className={styles.checkIconWrapper}>
            <CheckIcon />
          </span>
          <span className={styles.title}>{title}</span>
        </div>

        <span className={styles.arrowWrapper}>
          {isOpen ? <ChevronSmallUpIcon /> : <ChevronSmallDownIcon />}
        </span>
      </button>

      {isOpen && <div className={styles.content}>{children}</div>}
    </section>
  );
};

export default AccordionItem;
