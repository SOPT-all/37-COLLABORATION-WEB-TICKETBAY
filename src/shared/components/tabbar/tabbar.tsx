import { useState } from "react";

import { type TabId, type TabItem, TABS } from "@shared/constants/tabbar";

import CategoryIcon from "../category-icon/category-icon";

import * as styles from "./tabbar.css";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.container}>
        {TABS.map(({ id, label, Icon }: TabItem) => {
          const isActive = activeTab === id;
          return (
            <li
              key={id}
              className={styles.baseItem({ isItemActive: isActive })}
              onClick={() => setActiveTab(id)}
            >
              <CategoryIcon icon={<Icon />} text={label} isActive={isActive} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TabBar;
