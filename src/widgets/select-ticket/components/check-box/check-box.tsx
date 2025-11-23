import { useState } from "react";

import { CheckBoxIcon, CheckedBoxIcon } from "@assets/icons";

import * as styles from "./check-box.css";

interface Props {
  label?: string;
}

const CheckBox = ({ label }: Props) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxClick = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className={styles.container}>
      <button type="button" onClick={handleCheckBoxClick}>
        {isChecked && (
          <CheckedBoxIcon width={14} height={14} className={styles.icon({ isChecked })} />
        )}
        {!isChecked && (
          <CheckBoxIcon width={14} height={14} className={styles.icon({ isChecked })} />
        )}
      </button>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
};

export default CheckBox;
