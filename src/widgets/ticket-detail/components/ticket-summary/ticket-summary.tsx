import { HelpCircleIcon } from "@assets/icons";

import { MOCK_TICKET_SUMMARY } from "@widgets/ticket-detail/constants/ticket-summary.mock";

import * as styles from "./ticket-summary.css";

export const TicketSummary = () => {
  const data = MOCK_TICKET_SUMMARY;

  const infoList = [
    { label: "티켓 보유 여부", value: data.hasTicket },
    { label: "한 매 가격", value: data.pricePerTicket },
    { label: "수량", value: data.quantity },
  ];

  return (
    <section className={styles.container} aria-label="티켓 가격 요약">
      {/* 티켓 보유 여부, 한 매 가격, 수량 */}
      {infoList.map(({ label, value }) => (
        <div key={label} className={styles.row}>
          <span className={styles.label}>{label}</span>
          <span className={styles.value}>{value}</span>
        </div>
      ))}

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
