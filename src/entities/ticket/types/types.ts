import type { components, paths } from "@shared/types/schema";

type GetTicketListPath = paths["/events/{eventId}/tickets"]["get"]["parameters"]["path"];
type GetTicketListQuery = paths["/events/{eventId}/tickets"]["get"]["parameters"]["query"];

export type GetOptionCardRequest = GetTicketListPath & GetTicketListQuery;

export type GetOptionCardResponse =
  paths["/events/{eventId}/tickets"]["get"]["responses"]["200"]["content"]["*/*"];

export type TicketResponse = components["schemas"]["TicketResponse"];
