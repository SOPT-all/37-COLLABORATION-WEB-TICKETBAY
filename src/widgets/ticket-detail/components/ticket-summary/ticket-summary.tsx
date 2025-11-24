import { HelpCircleIcon } from "@assets/icons";

import * as styles from "./ticket-summary.css";

const MOCK_SUMMARY = {
  hasTicket: "현재 티켓 보유 중",
  pricePerTicket: "150,000원",
  quantity: "1매",
  totalPrice: "150,000원",
  pointText: "팬파워 345FP 적립",
};

export default function TicketSummary() {
  const { hasTicket, pricePerTicket, quantity, totalPrice, pointText } = MOCK_SUMMARY;

  return (
    <section className={styles.container} aria-label="티켓 가격 요약">
      {/* 티켓 보유 여부 */}
      <div className={styles.row}>
        <span className={styles.label}>티켓 보유 여부</span>
        <span className={styles.value}>{hasTicket}</span>
      </div>

      {/* 한 매 가격 */}
      <div className={styles.row}>
        <span className={styles.label}>한 매 가격</span>
        <span className={styles.value}>{pricePerTicket}</span>
      </div>

      {/* 수량 */}
      <div className={styles.row}>
        <span className={styles.label}>수량</span>
        <span className={styles.value}>{quantity}</span>
      </div>

      {/* 총 가격 */}
      <div className={styles.row}>
        <span className={styles.label}>총 가격</span>
        <span className={styles.totalPrice}>{totalPrice}</span>
      </div>

      {/* 팬파워 적립 안내 */}
      <div className={styles.pointRow}>
        <span className={styles.pointText}>{pointText}</span>
        <button type="button" className={styles.pointIcon} aria-label="팬파워 적립 안내">
          <HelpCircleIcon className={styles.pointIcon} />
        </button>
      </div>
    </section>
  );
}
