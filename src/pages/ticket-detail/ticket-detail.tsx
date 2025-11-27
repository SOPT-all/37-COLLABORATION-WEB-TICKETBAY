import { useNavigate, useParams } from "react-router";

import { ChevronBigLeftIcon, InfoIcon } from "@assets/icons";

import SafetyProgramAccordion from "@widgets/ticket-detail/components/accordion/safety-program-accordion";
import SeatMapAccordion from "@widgets/ticket-detail/components/accordion/seat-map-accordion";
import BottomButtons from "@widgets/ticket-detail/components/bottom-buttons/bottom-buttons";
import DetailTabs from "@widgets/ticket-detail/components/detail-tabs/detail-tabs";
import SeatMap from "@widgets/ticket-detail/components/seat-map/seat-map";
import TicketInfo from "@widgets/ticket-detail/components/ticket-info/ticket-info";
import TicketSummary from "@widgets/ticket-detail/components/ticket-summary/ticket-summary";

import Navigation from "@shared/components/navigation/navigation";

import * as styles from "./ticket-detail.css";

const TicketDetail = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <>
      {/* 상단 공통 네비게이션 */}
      <Navigation
        title="한국시리즈 5차전 [대전]"
        leftIcon={<ChevronBigLeftIcon width={24} height={24} />}
        rightIcon={<InfoIcon width={24} height={24} />}
        leftAction={handleNavigateBack}
      />

      {/* 컨텐츠 영역 */}
      <main className={styles.pageContainer}>
        <div className={styles.ticketInfoOffset}>
          <TicketInfo />
        </div>

        <div className={styles.removeGapTop}>
          <SeatMap />
        </div>

        <TicketSummary />

        <SeatMapAccordion />
        <SafetyProgramAccordion />

        <DetailTabs />

        <div className={styles.removeGapTop}>
          <BottomButtons />
        </div>
      </main>
    </>
  );
};

export default TicketDetail;
