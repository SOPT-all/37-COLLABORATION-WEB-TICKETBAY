import { TOP_RANK_PAGE_0, TOP_RANK_PAGE_1 } from "@widgets/home/constants/best-rank";

import BestTicketItem from "../best-ticket-item/best-ticket-item";

import * as styles from "./best-ticket-list.css";

interface Props {
  page: number;
}

const BestTicketList = ({ page }: Props) => {
  // TODO : API 연결
  const data = page === 0 ? TOP_RANK_PAGE_0 : TOP_RANK_PAGE_1;

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <BestTicketItem
          key={item.id}
          rank={index + 1 + page * 10}
          title={item.name}
          location={item.place}
          isTopRank={item.isTopRank}
        />
      ))}
    </div>
  );
};

export default BestTicketList;
