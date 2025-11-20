import { FabIcon } from "@assets/icons";

import * as styles from "./floating-button.css";

const FloatingButton = () => {
  return (
    <button type="button" className={styles.floatingButton}>
      <FabIcon className={styles.icon} />
    </button>
  );
};

export default FloatingButton;
