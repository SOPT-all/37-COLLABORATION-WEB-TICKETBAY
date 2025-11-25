import {
  CUSTOMER_SERVICE_LUNCH_BREAK,
  CUSTOMER_SERVICE_OPERATING_HOURS,
  CUSTOMER_SERVICE_TEL,
} from "@widgets/home/constants/contact";

import * as styles from "./contact.css";

const Contact = () => {
  return (
    <section className={styles.container}>
      <p className={styles.telephone}>고객센터 | {CUSTOMER_SERVICE_TEL}</p>
      <p className={styles.text}>운영시간: {CUSTOMER_SERVICE_OPERATING_HOURS}</p>
      <p className={styles.text}>점심시간: {CUSTOMER_SERVICE_LUNCH_BREAK}</p>
    </section>
  );
};

export default Contact;
