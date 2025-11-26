export interface RecentTicket {
  id: number;
  title: string;
  date: string;
}

export const RECENT_TICKET_MOCK_DATA: RecentTicket[] = [
  {
    id: 1,
    title: "한국시리즈 5차전 [대전]",
    date: "2025.10.31 18:30",
  },
  {
    id: 2,
    title: "한국시리즈 7차전 [대전]",
    date: "2025.11.03 18:30",
  },
  {
    id: 3,
    title: "한국시리즈 6차전 [서울]",
    date: "2025.11.04 18:30",
  },
];

