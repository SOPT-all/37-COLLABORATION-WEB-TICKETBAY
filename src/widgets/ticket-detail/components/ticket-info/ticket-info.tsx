import * as styles from "./ticket-info.css";

export const TicketInfo = () => {
  return (
    <section className={styles.container}>
      {/* 상단 내용 */}
      <div className={styles.headerRow}>
        <p className={styles.sectionTitle}>상품 정보</p>
        <p className={styles.productNumber}>
          <span className={styles.productNumberLabel}>상품번호</span>
          <span className={styles.productNumberValue}>9702343334630</span>
        </p>
      </div>

      {/* 하단 내용 */}
      <div className={styles.content}>
        <p className={styles.breadcrumb}>
          스포츠 &gt; 2025 프로야구 포스트시즌 &gt; 한국시리즈 5차전 [대전]
        </p>

        <div className={styles.metaBlock}>
          <p className={styles.metaRow}>
            <span className={styles.metaLabel}>경기 일시</span>
            <span className={styles.metaValue}>2025.10.31 18:30</span>
          </p>
          <p className={styles.metaRow}>
            <span className={styles.metaLabel}>경기 장소</span>
            <span className={styles.metaValue}>한화생명볼파크</span>
          </p>
        </div>

        <p className={styles.mainTitle}>LG vs 한화 | 507구역 | 2열</p>
        <p className={styles.seatType}>외야 지정석</p>
      </div>
    </section>
  );
};

export default TicketInfo;
