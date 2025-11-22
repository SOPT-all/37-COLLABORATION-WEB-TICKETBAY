import { useState } from "react";

import { CheckBoxIcon, CheckedBoxIcon } from "@assets/icons";

import * as styles from "./check-box.css";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <button type="button" onClick={handleCheckBoxClick}>
      {isChecked ? (
        <CheckedBoxIcon width={14} height={14} className={styles.icon({ isChecked })} />
      ) : (
        <CheckBoxIcon width={14} height={14} className={styles.icon({ isChecked })} />
      )}
    </button>
  );
};

export default CheckBox;
