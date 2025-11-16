import { RouterProvider } from "react-router";

import { router } from "@shared/router/router";
import ThemeProvider from "@shared/styles/theme-provider";

function App() {
  return (
    <ThemeProvider>
      {/* @TODO: 쿼리 클라이언트 추가 */}
      {/* <QueryClientProvider client={queryClient}> */}
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider> */}
    </ThemeProvider>
  );
}

export default App;
