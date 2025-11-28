import { useState } from "react";

import Skeleton from "@shared/components/skeleton/skeleton";

import * as styles from "./seat-map.css";

type SeatMapProps = {
  imageSrc?: string;
};

const SeatMap = ({ imageSrc }: SeatMapProps) => {
  const [isLoading, setIsLoading] = useState(true);

  if (!imageSrc) {
    return null;
  }

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Skeleton width="37.5rem" height="37.6rem" className={styles.seatImage} />}
      <img
        src={imageSrc}
        alt="좌석 배치도"
        className={styles.seatImage}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </>
  );
};

export default SeatMap;
