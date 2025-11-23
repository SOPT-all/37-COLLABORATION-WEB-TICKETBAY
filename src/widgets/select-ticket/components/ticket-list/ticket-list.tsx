// import { MATCH_MOCK_DATA } from "@shared/constants/match-mock-data.ts";

import * as styles from "./ticket-list.css";

// @TODO: 목 데이터로 map 돌리는 로직 구현

const TicketList = () => {
  return (
    <div className={styles.container}>
      {/* {MATCH_MOCK_DATA.map((match) => (
        <TicketOptionCard key={match.id} match={match} />
      ))} */}
    </div>
  );
};

export default TicketList;
