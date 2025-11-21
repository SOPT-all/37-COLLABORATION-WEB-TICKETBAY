import { Suspense } from "react";
import { Outlet, ScrollRestoration } from "react-router";

import TabBar from "@shared/components/tabbar/tabbar";

import { rootStyle } from "@shared/styles/global.css";

export default function GlobalLayout() {
  return (
    <div className={rootStyle}>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <TabBar />
      <ScrollRestoration />
    </div>
  );
}
