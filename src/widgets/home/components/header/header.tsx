import { HamburgermenuIcon, MessageAlarmIcon, TicketbayTextLogoIcon } from "@assets/icons";

import * as styles from "./header.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <TicketbayTextLogoIcon width={106} height={12} />
      </div>
      <div className={styles.rightSection}>
        <button type="button" className={styles.iconButton}>
          <MessageAlarmIcon width={27} height={27} />
        </button>
        <button type="button" className={styles.iconButton}>
          <HamburgermenuIcon width={24} height={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;

