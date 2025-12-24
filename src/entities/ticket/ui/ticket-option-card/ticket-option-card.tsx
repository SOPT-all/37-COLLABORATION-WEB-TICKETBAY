import { useState } from "react";
import { TICKET_QUERY_KEY } from "@entities/ticket/queries/query-key";
import type { TicketResponse } from "@entities/ticket/types/types";

import CompareAddButton from "@shared/components/compare-add-button/compare-add-button";
import { queryClient } from "@shared/query/query-client";
import { formatDateToDot } from "@shared/utils/format-date-to-dot";
import { formatPriceToKorean } from "@shared/utils/format-price-to-korean";

import * as styles from "./ticket-option-card.css";

const DELIMITER = " | ";

interface Props {
  id: number;
  onClickCard?: () => void;
}

const TicketOptionCard = ({ onClickCard, id }: Props) => {
  const [isCompareButtonActive, setIsCompareButtonActive] = useState(false);

  const handleCompareButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCompareButtonActive((prev) => !prev);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("[data-dropdown-list]")) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    onClickCard?.();
  };

  const cachedData = queryClient.getQueryData<TicketResponse>(TICKET_QUERY_KEY.DETAIL(id));

  const isTicketResponse = (data: typeof cachedData): data is TicketResponse => {
    return data !== undefined && "date" in data && "detailName" in data;
  };

  const ticket = isTicketResponse(cachedData) ? cachedData : null;

  if (!ticket) {
    return null;
  }

  return (
    <div className={styles.container} onClick={handleCardClick}>
      <div className={styles.matchDateContainer}>
        <div className={styles.matchDateContent}>
          <p className={styles.matchDateContentTitle}>경기 일시</p>
          <p className={styles.matchDateContentValue}>{formatDateToDot(ticket.date!)}</p>
        </div>
        <CompareAddButton
          size="sm"
          isActive={isCompareButtonActive}
          onClick={handleCompareButtonClick}
        />
      </div>

      <div className={styles.matchInfo}>
        <span>
          {ticket.detailName}
          {DELIMITER}
        </span>
        <span>
          {ticket.area}구역{DELIMITER}
        </span>
        <span>{ticket.seatColumn}열</span>
      </div>

      <div className={styles.seatType}>
        <span>
          {ticket.seatType}
          {DELIMITER}
        </span>
        <span>{ticket.seatPosition}</span>
      </div>

      <div className={styles.amountContainer}>
        <div className={styles.chip}>PIN</div>
        <div className={styles.amountContent}>
          <p className={styles.amountTitle}>수량</p>
          <p className={styles.amountValue}>{ticket.amount}매</p>
        </div>
      </div>

      <div className={styles.priceContainer}>
        <p className={styles.priceTitle}>한 매 가격</p>
        <p className={styles.priceValue}>{formatPriceToKorean(ticket.price!)}원</p>
      </div>
    </div>
  );
};

export default TicketOptionCard;
