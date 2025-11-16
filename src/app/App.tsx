import { RouterProvider } from "react-router";

import { router } from "@shared/router/router";

function App() {
  return (
    // @TODO: global 테마 추가
    // <ThemeProvider>

    // @TODO: 쿼리 클라이언트 추가
    // <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    // <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>

    // </ThemeProvider>
  );
}

export default App;
