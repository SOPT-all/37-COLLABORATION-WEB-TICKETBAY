export type SeatMapMock = {
  id: number;
  seatImageUrl: string;
};

const SEAT_MAP_MOCK_MAP: SeatMapMock[] = [
  { id: 1, seatImageUrl: "/img_seatview_118.webp" },
  { id: 2, seatImageUrl: "/img_seatview_410.webp" },
  { id: 3, seatImageUrl: "/img_seatview_507.webp" },
];

export const getSeatMapById = (id: number): SeatMapMock | undefined =>
  SEAT_MAP_MOCK_MAP.find((item) => item.id === id);
