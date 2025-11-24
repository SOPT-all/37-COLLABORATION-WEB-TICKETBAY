import { useState } from "react";

import CompareAddButton from "@shared/components/compare-add-button/compare-add-button";
import { formatDateToDot } from "@shared/utils/format-date-to-dot";
import { formatPriceToKorean } from "@shared/utils/format-price-to-korean";

import * as styles from "./ticket-option-card.css";

const DELIMITER = " | ";

interface Props {
  onClickCard?: () => void;
  onClickCompareButton?: () => void;

  date: string;
  detailName: string;
  area: number;
  seatColumn: number;
  seatType: string;
  seatPosition: string;
  amount: number;
  price: number;
}

const TicketOptionCard = ({
  onClickCard,
  onClickCompareButton,

  date,
  detailName,
  area,
  seatColumn,
  seatType,
  seatPosition,
  amount,
  price,
}: Props) => {
  const [isCompareButtonActive, setIsCompareButtonActive] = useState(false);

  const handleCompareButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCompareButtonActive((prev) => !prev);
    onClickCompareButton?.();
  };

  return (
    <div className={styles.container} onClick={onClickCard}>
      <div className={styles.matchDateContainer}>
        <div className={styles.matchDateContent}>
          <p className={styles.matchDateContentTitle}>경기 일시</p>
          <p className={styles.matchDateContentValue}>{formatDateToDot(date)}</p>
        </div>
        <CompareAddButton
          size="sm"
          isActive={isCompareButtonActive}
          onClick={handleCompareButtonClick}
        />
      </div>

      <div className={styles.matchInfo}>
        <span>
          {detailName}
          {DELIMITER}
        </span>
        <span>
          {area}구역{DELIMITER}
        </span>
        <span>{seatColumn}열</span>
      </div>

      <div className={styles.seatType}>
        <span>
          {seatType}
          {DELIMITER}
        </span>
        <span>{seatPosition}</span>
      </div>

      <div className={styles.amountContainer}>
        <div className={styles.chip}>PIN</div>
        <div className={styles.amountContent}>
          <p className={styles.amountTitle}>수량</p>
          <p className={styles.amountValue}>{amount}매</p>
        </div>
      </div>

      <div className={styles.priceContainer}>
        <p className={styles.priceTitle}>총 결제 금액</p>
        <p className={styles.priceValue}>{formatPriceToKorean(price)}원</p>
      </div>
    </div>
  );
};

export default TicketOptionCard;
