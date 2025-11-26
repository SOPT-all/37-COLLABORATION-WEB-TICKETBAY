import * as styles from "./seat-map.css";

type SeatMapProps = {
  imageSrc?: string;
};

const SeatMap = ({ imageSrc }: SeatMapProps) => {
  const fallbackSrc = imageSrc ?? "/img_seatview_118.webp";

  return <img src={fallbackSrc} alt="좌석 배치도" className={styles.seatImage} />;
};

export default SeatMap;
