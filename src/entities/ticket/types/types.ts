import type { paths } from "@shared/types/schema";

export type GetOptionCardRequest = paths["/events/{eventId}/tickets"]["get"]["parameters"]["path"];

export type GetOptionCardResponse =
  paths["/events/{eventId}/tickets"]["get"]["responses"]["200"]["content"]["*/*"];
