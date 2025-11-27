import { TicketbayGlobalButton } from "@widgets/home/components/TicketbayGlobalButton/TicketbayGlobalButton";
import { BuyButton } from "@widgets/ticket-detail/components/buy-button/buy-button";

import CompareAddButton from "@shared/components/compare-add-button/compare-add-button";
import FooterMenu from "@shared/components/footer-menu/footer-menu";

import * as styles from "./bottom-buttons.css";

const BottomButtons = () => {
  return (
    <section className={styles.container}>
      <FooterMenu />

      <p className={styles.notice}>
        티켓베이는 통신판매 중개자이며, 통신판매의 당사자가 아닙니다. <br /> 따라서 티켓베이는 상품거래정보 및
        거래에 대하여 책임을 지지 않습니다.
      </p>

      <div className={styles.globalButtonWrapper}>
        <TicketbayGlobalButton />
      </div>

      <div className={styles.buttonRow}>
        <div className={styles.compareButtonWrapper}>
          <CompareAddButton size="lg" />
        </div>
        <div className={styles.buyButtonWrapper}>
          <BuyButton />
        </div>
      </div>
    </section>
  );
};

export default BottomButtons;
