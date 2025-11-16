import {
  HomePage,
  SelectTicketPage,
  TicketDetailPage,
} from "@shared/router/lazy";
import { routePath } from "@shared/router/path";

export const globalRoutes = [
  {
    path: routePath.HOME,
    element: <HomePage />,
  },
  {
    path: routePath.SELECT_TICKET,
    element: <SelectTicketPage />,
  },
  {
    path: routePath.TICKET_DETAIL,
    element: <TicketDetailPage />,
  },
];
