import CheckBox from "@widgets/select-ticket/components/check-box/check-box";

import * as styles from "./check-box-label.css";

interface Props {
  label: string;
}

const CheckBoxLabel = ({ label }: Props) => {
  return (
    <div className={styles.container}>
      <CheckBox />
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default CheckBoxLabel;
