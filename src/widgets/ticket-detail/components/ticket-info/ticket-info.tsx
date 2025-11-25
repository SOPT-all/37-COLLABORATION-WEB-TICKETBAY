import { ChevronSmallRightIcon } from "@assets/icons";

import { MOCK_TICKET_INFO } from "@widgets/ticket-detail/constants/ticket-info.mock";

import * as styles from "./ticket-info.css";

export const TicketInfo = () => {
  const data = MOCK_TICKET_INFO;

  // "스포츠 > 2025 프로야구 포스트시즌 > 한국시리즈 5차전 [대전]"
  // 을 ["스포츠", "2025 프로야구 포스트시즌", "한국시리즈 5차전 [대전]"] 로 분리
  const breadcrumbItems = data.breadcrumb.split(">").map((item) => item.trim());

  return (
    <section className={styles.container}>
      {/* 상단 내용 */}
      <div className={styles.headerRow}>
        <p className={styles.sectionTitle}>상품 정보</p>
        <p className={styles.productNumber}>
          <span className={styles.productNumberLabel}>상품번호</span>
          <span className={styles.productNumberValue}>{data.productNumber}</span>
        </p>
      </div>

      {/* 하단 내용 */}
      <div className={styles.content}>
        <p className={styles.breadcrumb}>
          {breadcrumbItems.map((item, index) => (
            <span key={`${item}-${index}`} className={styles.breadcrumbItem}>
              {index > 0 && <ChevronSmallRightIcon aria-hidden className={styles.breadcrumbIcon} />}
              {item}
            </span>
          ))}
        </p>

        <div className={styles.metaBlock}>
          <p className={styles.metaRow}>
            <span className={styles.metaLabel}>경기 일시</span>
            <span className={styles.metaValue}>{data.date}</span>
          </p>
          <p className={styles.metaRow}>
            <span className={styles.metaLabel}>경기 장소</span>
            <span className={styles.metaValue}>{data.location}</span>
          </p>
        </div>

        <p className={styles.mainTitle}>{data.title}</p>
        <p className={styles.seatType}>{data.seatType}</p>
      </div>
    </section>
  );
};

export default TicketInfo;
