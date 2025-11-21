import { ChevronBigRightIcon } from "@assets/icons";

import { Button } from "@shared/components/button/button";

// TICKETBAY GLOBAL 버튼
export const TicketbayGlobalButton = () => {
  return (
    <Button variant="primary" size="ticketbayGlobal">
      TICKETBAY GLOBAL
      <ChevronBigRightIcon />
    </Button>
  );
};
