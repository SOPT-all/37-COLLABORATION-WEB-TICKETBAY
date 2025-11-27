import type { components, paths } from "@shared/types/schema";

type GetTopEventsQuery = paths["/events/top"]["get"]["parameters"]["query"];

export type GetTopEventsRequest = GetTopEventsQuery;

export type GetTopEventsResponse =
  paths["/events/top"]["get"]["responses"]["200"]["content"]["*/*"];

export type EventResponse = components["schemas"]["EventResponse"];

export type EventPageMetaResponse = components["schemas"]["EventPageMetaResponse"];

