import { HelpIcon } from "@assets/icons";

import * as styles from "./floating-button.css";

const FloatingButton = () => {
  return (
    <button type="button" className={styles.floatingButton}>
      <HelpIcon width={17} height={17} />
    </button>
  );
};

export default FloatingButton;
