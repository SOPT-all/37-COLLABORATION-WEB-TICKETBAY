import { ChevronBigLeftIcon, InfoIcon } from "@assets/icons";

import BottomSheet from "@widgets/select-ticket/components/bottom-sheet/bottom-sheet";
import Header from "@widgets/select-ticket/components/header/header";

import Navigation from "@shared/components/navigation/navigation";

const SelectTicket = () => {
  return (
    <>
      <Navigation
        title="한국시리즈 5차전 [대전]"
        leftIcon={<ChevronBigLeftIcon width={24} height={24} />}
        rightIcon={<InfoIcon width={24} height={24} />}
      />
      <Header eventTitle="한국시리즈 5차전 [대전]" stadiumName="한화생명볼파크" />
      <BottomSheet />
    </>
  );
};

export default SelectTicket;
