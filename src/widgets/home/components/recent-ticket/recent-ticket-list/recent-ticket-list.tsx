import { useRef } from "react";
import RecentTicketCard from "@widgets/home/components/recent-ticket/recent-ticket-card/recent-ticket-card";
import { useHorizontalScroll } from "@widgets/select-ticket/hooks/use-horizontal-scroll";
import { RECENT_TICKET_MOCK_DATA } from "@widgets/home/constants/recent-ticket-data";
import * as styles from "./recent-ticket-list.css";

const RecentTicketList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  useHorizontalScroll(scrollRef);

  // TODO: 5차전에 API 연동 
  const handleTicketClick = (ticketId: number) => {
    if (ticketId === 1) {
  
    }
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

