import { useState } from "react";

import {
  CartIcon,
  CategoryIcon as CategorySvgIcon,
  HomeIcon,
  MyIcon,
  TicketregisterIcon,
} from "@assets/icons";

import CategoryIcon from "../category-icon/category-icon";

import * as styles from "./tabbar.css";

export type TabId = "home" | "category" | "sell" | "compare" | "my";

const TabBar = () => {
  const [activeTab, setActiveTab] = useState<TabId>("home");

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.container}>
        {/* 홈 */}
        <li className={activeTab === "home" ? styles.itemActive : styles.itemInactive}>
          <CategoryIcon
            icon={<HomeIcon />}
            text="홈"
            isActive={activeTab === "home"}
            onClick={() => setActiveTab("home")}
          />
        </li>

        {/* 카테고리 */}
        <li className={activeTab === "category" ? styles.itemActive : styles.itemInactive}>
          <CategoryIcon
            icon={<CategorySvgIcon />}
            text="카테고리"
            isActive={activeTab === "category"}
            onClick={() => setActiveTab("category")}
          />
        </li>

        {/* 판매등록 */}
        <li className={activeTab === "sell" ? styles.itemActive : styles.itemInactive}>
          <CategoryIcon
            icon={<TicketregisterIcon />}
            text="판매등록"
            isActive={activeTab === "sell"}
            onClick={() => setActiveTab("sell")}
          />
        </li>

        {/* 비교담기 */}
        <li className={activeTab === "compare" ? styles.itemActive : styles.itemInactive}>
          <CategoryIcon
            icon={<CartIcon />}
            text="비교담기"
            isActive={activeTab === "compare"}
            onClick={() => setActiveTab("compare")}
          />
        </li>

        {/* MY */}
        <li className={activeTab === "my" ? styles.itemActive : styles.itemInactive}>
          <CategoryIcon
            icon={<MyIcon />}
            text="MY"
            isActive={activeTab === "my"}
            onClick={() => setActiveTab("my")}
          />
        </li>
      </ul>
    </nav>
  );
};

export default TabBar;
