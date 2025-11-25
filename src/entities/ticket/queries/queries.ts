import { getTicketOption } from "@entities/ticket/api/getTicketOption";
import { TICKET_QUERY_KEY } from "@entities/ticket/queries/query-key";
import { queryOptions } from "@tanstack/react-query";

export const TICKET_QUERY_OPTIONS = {
  TICKET_OPTION: (eventId: number) => {
    return queryOptions({
      queryKey: TICKET_QUERY_KEY.OPTION_CARD(eventId),
      queryFn: () => getTicketOption({ eventId: eventId }),
    });
  },
};
