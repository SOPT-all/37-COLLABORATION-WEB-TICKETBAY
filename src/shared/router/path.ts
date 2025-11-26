export const ROUTE_PATH = {
  HOME: "/",
  SELECT_TICKET: "/select-ticket/:ticketId",
  TICKET_DETAIL: "/ticket-detail/:ticketId",
} as const;

export type Routes = (typeof ROUTE_PATH)[keyof typeof ROUTE_PATH];
