import type { ReactNode } from "react";
import { useNavigate } from "react-router";

import * as styles from "./navigation.css";

interface Props {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  rightAction?: () => void;
}

const Navigation = ({ title, leftIcon, rightIcon, rightAction }: Props) => {
  const navigate = useNavigate();
  const handleLeftClick = () => {
    navigate(-1);
  };

  return (
    <header className={styles.container}>
      <button className={styles.Icon} onClick={handleLeftClick}>
        {leftIcon}
      </button>
      <h1 className={styles.title}>{title}</h1>
      <button className={styles.Icon} onClick={rightAction}>
        {rightIcon}
      </button>
    </header>
  );
};

export default Navigation;
