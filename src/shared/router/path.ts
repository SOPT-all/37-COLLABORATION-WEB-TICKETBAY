export const routePath = {
  HOME: "/",
  SELECT_TICKET: "/select-ticket",
  TICKET_DETAIL: "/ticket-detail/:ticketId",
} as const;

export type Routes = (typeof routePath)[keyof typeof routePath];
