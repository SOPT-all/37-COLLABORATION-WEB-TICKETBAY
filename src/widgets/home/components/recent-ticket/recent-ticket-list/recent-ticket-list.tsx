import { useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import RecentTicketCard from "@entities/history/ui/recent-ticket-card/recent-ticket-card";
import { RECENT_TICKET_MOCK_DATA } from "@widgets/home/constants/recent-ticket-data";
import { ROUTE_PATH } from "@shared/router/path";

import * as styles from "./recent-ticket-list.css";

const RecentTicketList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scrollArea = scrollRef.current;
    if (!scrollArea) {
      return;
    }

    let isDragging = false;
    let dragStartX = 0;
    let initialScrollLeft = 0;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      dragStartX = e.pageX - scrollArea.offsetLeft;
      initialScrollLeft = scrollArea.scrollLeft;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) {
        return;
      }
      const currentX = e.pageX - scrollArea.offsetLeft;
      scrollArea.scrollLeft = initialScrollLeft - (currentX - dragStartX);
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    scrollArea.addEventListener("mousedown", handleMouseDown);
    scrollArea.addEventListener("mousemove", handleMouseMove);
    scrollArea.addEventListener("mouseup", handleMouseUp);
    scrollArea.addEventListener("mouseleave", handleMouseUp);

    return () => {
      scrollArea.removeEventListener("mousedown", handleMouseDown);
      scrollArea.removeEventListener("mousemove", handleMouseMove);
      scrollArea.removeEventListener("mouseup", handleMouseUp);
      scrollArea.removeEventListener("mouseleave", handleMouseUp);
    };
  }, []);

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

