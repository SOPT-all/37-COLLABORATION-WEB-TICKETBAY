import type { components, paths } from "@shared/types/schema";

type GetTicketListPath = paths["/events/{eventId}/tickets"]["get"]["parameters"]["path"];
type GetTicketListQuery = paths["/events/{eventId}/tickets"]["get"]["parameters"]["query"];

export type GetOptionCardRequest = GetTicketListPath & GetTicketListQuery;

export type GetOptionCardResponse =
  paths["/events/{eventId}/tickets"]["get"]["responses"]["200"]["content"]["*/*"];

export type TicketResponse = components["schemas"]["TicketResponse"];

export type GetTicketDetailRequest = paths["/tickets/{ticketId}"]["get"]["parameters"]["path"];

export type GetTicketDetailResponse =
  paths["/tickets/{ticketId}"]["get"]["responses"]["200"]["content"]["*/*"];

export type TicketDetail = Required<TicketResponse>;
