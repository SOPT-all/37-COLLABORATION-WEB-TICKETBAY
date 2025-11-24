import TicketOptionCard from "@entities/ticket/ui/ticket-option-card/ticket-option-card";

import { MATCH_MOCK_DATA } from "@shared/constants/match-mock-data.ts";

import * as styles from "./ticket-list.css";

const TicketList = () => {
  return (
    <div className={styles.container}>
      {MATCH_MOCK_DATA.map((match) => (
        <TicketOptionCard key={match.id} isCompareButtonActive={false} {...match} />
      ))}
    </div>
  );
};

export default TicketList;
