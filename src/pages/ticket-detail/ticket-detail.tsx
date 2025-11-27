import { useParams } from "react-router";
import { useNavigate } from "react-router";

import { ChevronBigLeftIcon, InfoIcon } from "@assets/icons";

import Accordion from "@widgets/ticket-detail/components/accordion/accordion";
import SafetyProgramAccordion from "@widgets/ticket-detail/components/accordion/safety-program-accordion";
import SeatMapAccordion from "@widgets/ticket-detail/components/accordion/seat-map-accordion";
import BottomButtons from "@widgets/ticket-detail/components/bottom-buttons/bottom-buttons";
import { BuyButton } from "@widgets/ticket-detail/components/buy-button/buy-button";
import DetailTabs from "@widgets/ticket-detail/components/detail-tabs/detail-tabs";
import SeatMap from "@widgets/ticket-detail/components/seat-map/seat-map";
import TicketInfo from "@widgets/ticket-detail/components/ticket-info/ticket-info";
import TicketSummary from "@widgets/ticket-detail/components/ticket-summary/ticket-summary";

import Navigation from "@shared/components/navigation/navigation";

const TicketDetail = () => {
  const { ticketId } = useParams();

  const navigate = useNavigate();

  const handleNavigateToTicketDetail = () => {
    navigate(-1);
  };

  return (
    <>
      {/* 상단 공통 헤더 */}
      <Navigation
        title="한국시리즈 5차전 [대전]"
        leftIcon={<ChevronBigLeftIcon width={24} height={24} />}
        rightIcon={<InfoIcon width={24} height={24} />}
        leftAction={handleNavigateToTicketDetail}
      />

      {/* 콘텐츠 영역 */}
      <main>
        <TicketInfo />
        <SeatMap />
        <TicketSummary />
        <SeatMapAccordion />
        <SafetyProgramAccordion />
        <DetailTabs />
        <BottomButtons />
      </main>
    </>
  );
};

export default TicketDetail;
