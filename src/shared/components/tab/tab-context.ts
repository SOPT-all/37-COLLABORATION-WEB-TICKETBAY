import { createContext, useContext } from "react";

interface TabContextProps {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

export const TabContext = createContext<TabContextProps | null>(null);

export const useTabContext = () => {
  const ctx = useContext(TabContext);

  if (!ctx) {
    throw new Error("Tab 컴포넌트는 Tab.Container 내부에서 사용되어야 합니다.");
  }

  return ctx;
};
