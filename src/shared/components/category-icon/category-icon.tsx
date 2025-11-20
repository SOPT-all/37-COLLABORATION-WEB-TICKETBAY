import type { ReactNode } from "react";

import * as styles from "./category-icon.css";

interface Props {
  icon: ReactNode;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CategoryIcon = ({ icon, text, isActive = false, onClick }: Props) => {
  return (
    <button type="button" className={styles.container} onClick={onClick}>
      <div className={styles.icon({ isActive })}>{icon}</div>
      <p className={styles.text({ isActive })}>{text}</p>
    </button>
  );
};

export default CategoryIcon;
