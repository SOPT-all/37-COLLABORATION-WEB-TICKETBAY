import * as styles from "./best-ticket-item.css";

interface Props {
  title: string;
  location: string;
  rank: number;
  isTopRank: boolean;
}

const BestTicketItem = ({ rank, title, location, isTopRank }: Props) => {
  const isTight = rank >= 10;

  return (
    <div className={styles.container({ isTight })}>
      <h3 className={styles.rank({ isTopRank })}>{rank}</h3>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  );
};

export default BestTicketItem;
