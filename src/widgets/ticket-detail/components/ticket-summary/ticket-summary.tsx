import { HelpCircleIcon } from "@assets/icons";

import { MOCK_TICKET_SUMMARY } from "@widgets/ticket-detail/constants/ticket-summary.mock";

import * as styles from "./ticket-summary.css";

export const TicketSummary = () => {
  const data = MOCK_TICKET_SUMMARY;

  return (
    <section className={styles.container} aria-label="티켓 가격 요약">
      {/* 티켓 보유 여부 */}
      <div className={styles.row}>
        <span className={styles.label}>티켓 보유 여부</span>
        <span className={styles.value}>{data.hasTicket}</span>
      </div>

      {/* 한 매 가격 */}
      <div className={styles.row}>
        <span className={styles.label}>한 매 가격</span>
        <span className={styles.value}>{data.pricePerTicket}</span>
      </div>

      {/* 수량 */}
      <div className={styles.row}>
        <span className={styles.label}>수량</span>
        <span className={styles.value}>{data.quantity}</span>
      </div>

      {/* 총 가격 */}
      <div className={styles.row}>
        <span className={styles.label}>총 가격</span>
        <span className={styles.totalPrice}>{data.totalPrice}</span>
      </div>

      {/* 팬파워 적립 안내 */}
      <div className={styles.pointRow}>
        <span className={styles.pointText}>{data.pointText}</span>
        <button type="button" className={styles.pointIcon} aria-label="팬파워 적립 안내">
          <HelpCircleIcon className={styles.pointIcon} />
        </button>
      </div>
    </section>
  );
};

export default TicketSummary;
