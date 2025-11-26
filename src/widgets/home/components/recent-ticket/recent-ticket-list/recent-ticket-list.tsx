import { useRef } from "react";
import { useNavigate } from "react-router";
import RecentTicketCard from "@entities/history/ui/recent-ticket-card/recent-ticket-card";
import { useHorizontalScroll } from "../../../../select-ticket/hooks/use-horizontal-scroll";
import { RECENT_TICKET_MOCK_DATA } from "@widgets/home/constants/recent-ticket-data";
import { ROUTE_PATH } from "@shared/router/path";

import * as styles from "./recent-ticket-list.css";

const RecentTicketList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  useHorizontalScroll(scrollRef);

  const handleTicketClick = (ticketId: number) => {
    navigate(ROUTE_PATH.SELECT_TICKET.replace(":ticketId", String(ticketId)));
  };
  return (
    <div ref={scrollRef} className={styles.container}>
      {RECENT_TICKET_MOCK_DATA.map((ticket) => (
        <RecentTicketCard
          key={ticket.id}
          title={ticket.title}
          date={ticket.date}
          onClick={() => handleTicketClick(ticket.id)}
        />
      ))}
    </div>
  );
};

export default RecentTicketList;

