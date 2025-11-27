import { useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";

import BestTicketItem from "@widgets/home/components/best-ticket/best-ticket-item/best-ticket-item";
import { EVENT_QUERY_OPTIONS } from "@entities/event/queries/queries";
import { ROUTE_PATH } from "@shared/router/path";

import * as styles from "./best-ticket-list.css";

interface Props {
  page: number;
}

const BestTicketList = ({ page }: Props) => {
  const navigate = useNavigate();
  const { data: events = [] } = useQuery(EVENT_QUERY_OPTIONS.TOP_EVENTS(page, 10));

  const handleTicketClick = (eventId?: number) => {
    if (eventId) {
      navigate(ROUTE_PATH.SELECT_TICKET.replace(":eventId", String(eventId)));
    }
  };

  return (
    <div className={styles.container}>
      {events.map((event, index) => {
        const rank = index + 1 + page * 10;
        return (
          <BestTicketItem
            key={event.id}
            rank={rank}
            title={event.name || ""}
            location={event.place || ""}
            isTopRank={rank <= 5}
            onClick={() => handleTicketClick(event.id)}
          />
        );
      })}
    </div>
  );
};

export default BestTicketList;
