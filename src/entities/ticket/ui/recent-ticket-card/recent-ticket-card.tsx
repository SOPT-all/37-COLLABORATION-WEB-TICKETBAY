import { ChevronSmallRightIcon } from "@assets/icons";

import * as styles from "./recent-ticket-card.css";

interface Props {
  title: string;
  date: string;
  onClick?: () => void;
}

const RecentTicketCard = ({ title, date, onClick }: Props) => {
  return (
    <button type="button" className={styles.cardButton} onClick={onClick}>
      <div className={styles.cardInner}>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.date}>경기 일시 : {date}</p>
        </div>
        <ChevronSmallRightIcon width={20} height={20} className={styles.icon} />
      </div>
    </button>
  );
};

export default RecentTicketCard;

