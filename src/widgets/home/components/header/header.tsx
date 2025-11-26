import { HamburgermenuIcon, MessageAlarmIcon, TicketbayTextLogoIcon } from "@assets/icons";

import * as styles from "./header.css";

interface Props {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: Props) => {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <TicketbayTextLogoIcon width={106} height={12} />
      </div>
      <div className={styles.rightSection}>
        <button type="button" className={styles.iconButton}>
          <MessageAlarmIcon width={27} height={27} />
        </button>
        <button 
          type="button" 
          className={styles.iconButton} 
          data-hamburger-button 
          onClick={(e) => {
            e.stopPropagation();
            onMenuClick();
          }}
        >
          <HamburgermenuIcon width={24} height={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;

