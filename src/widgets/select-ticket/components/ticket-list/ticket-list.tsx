import TicketOptionCard from "@entities/ticket/ui/ticket-option-card/ticket-option-card";
import { useNavigate } from "react-router";

import { useDropdownContext } from "@widgets/select-ticket/components/dropdown/dropdown-context";
import { DROPDOWN_CONFIGS } from "@widgets/select-ticket/constants/dropdown-mock-data";

import { MATCH_MOCK_DATA } from "@shared/constants/match-mock-data.ts";
import { ROUTE_PATH } from "@shared/router/path";

import * as styles from "./ticket-list.css";

const PERFORMANCE_DATE_DROPDOWN_ID = DROPDOWN_CONFIGS[0].label;

const TicketList = () => {
  const navigate = useNavigate();
  const { selectedId } = useDropdownContext();

  const selectedDateId = selectedId(PERFORMANCE_DATE_DROPDOWN_ID);

  const filteredTickets =
    selectedDateId === null
      ? MATCH_MOCK_DATA
      : MATCH_MOCK_DATA.filter((ticket) => ticket.date === selectedDateId);

  const handleCardClick = (id: number) => {
    navigate(ROUTE_PATH.TICKET_DETAIL.replace(":ticketId", String(id)));
  };

  return (
    <div className={styles.container}>
      {filteredTickets.map((match) => (
        <TicketOptionCard key={match.id} onClickCard={() => handleCardClick(match.id)} {...match} />
      ))}
    </div>
  );
};

export default TicketList;
