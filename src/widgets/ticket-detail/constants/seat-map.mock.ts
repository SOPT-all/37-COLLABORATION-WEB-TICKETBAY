export type SeatMapMock = {
  id: number;
  seatImageUrl: string;
};

const SEAT_MAP_MOCK_MAP: Record<number, SeatMapMock> = {
  1: { id: 1, seatImageUrl: "/img_seatview_118.webp" },
  2: { id: 2, seatImageUrl: "/img_seatview_410.webp" },
  3: { id: 3, seatImageUrl: "/img_seatview_507.webp" },
};

export const getSeatMapById = (id: number): SeatMapMock | undefined => SEAT_MAP_MOCK_MAP[id];
