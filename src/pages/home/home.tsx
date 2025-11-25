import { useState } from "react";

import Header from "@widgets/home/components/header/header";
import Sidebar from "@widgets/home/components/sidebar/sidebar";
import Search from "@widgets/home/components/search/search";

import * as styles from "./home.css";

function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage} />
      <div className={styles.gradient} />
      <Header onMenuClick={handleMenuClick} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
      <Header />
      <Search />
    </div>
  );
}

export default Home;