import { useParams } from "react-router";

import { getSeatMapById } from "@widgets/ticket-detail/constants/seat-map.mock";

import * as styles from "./seat-map.css";

type RouteParams = {
  ticketId?: string;
};

const SeatMap = () => {
  const { ticketId } = useParams<RouteParams>();

  const numericId = Number(ticketId);
  const seatImageUrl =
    ticketId && !Number.isNaN(numericId) ? getSeatMapById(numericId)?.seatImageUrl : undefined;

  const imageSrc = seatImageUrl ?? "/img_seatview_118.webp";

  return <img src={imageSrc} alt="좌석 배치도" className={styles.seatImage} />;
};

export default SeatMap;
