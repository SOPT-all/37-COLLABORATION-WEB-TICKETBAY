import { ChevronBigRightIcon } from "@assets/icons";

import { Button } from "@shared/components/button/button";

// TICKETBAY GLOBAL 버튼
export const TicketbayGlobalButton = () => {
  return (
    <Button buttonColor="primary" size="ticketbayGlobal" fullWidth>
      TICKETBAY GLOBAL
      <ChevronBigRightIcon />
    </Button>
  );
};
