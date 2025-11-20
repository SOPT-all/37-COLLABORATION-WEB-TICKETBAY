import { useState, type ReactNode } from "react";
import { TabContext, useTabContext } from "./tab-context";
import * as styles from "./tab.css";

const Container = ({ initialValue, children }: { initialValue: string; children: ReactNode }) => {
  const [selectedTab, setSelectedTab] = useState(initialValue);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab }}>{children}</TabContext.Provider>
  );
};

const List = ({ children }: { children: ReactNode }) => {
  return (
    <nav>
      <ul className={styles.list}>{children}</ul>
    </nav>
  );
};

const Item = ({ value, children }: { value: string; children: ReactNode }) => {
  const { selectedTab, setSelectedTab } = useTabContext();

  const isActive = selectedTab === value;

  return (
    <li className={styles.item}>
      <button
        type="button"
        onClick={() => setSelectedTab(value)}
        className={styles.button({ isActive })}
      >
        {children}
      </button>
    </li>
  );
};

const Panel = ({ tab, children }: { tab: string; children: ReactNode }) => {
  const { selectedTab } = useTabContext();

  if (selectedTab !== tab) return null;

  return <>{children}</>;
};

const Tab = {
  Container,
  List,
  Item,
  Panel,
};

export default Tab;
