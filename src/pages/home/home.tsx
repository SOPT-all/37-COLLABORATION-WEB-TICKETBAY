import { SoundIcon } from "@assets/icons";
import { useState } from "react";

import Header from "@widgets/home/components/header/header";
import Sidebar from "@widgets/home/components/sidebar/sidebar";
import Search from "@widgets/home/components/search/search";
import Category from "@widgets/home/components/category/category";

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

    <>
      <div className={styles.container}>
        <div className={styles.backgroundImage} />
        <div className={styles.gradient} />
        <Header onMenuClick={handleMenuClick} />
         <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarClose} />
        <Search />
        <Category />
        <div className={styles.noticeBanner}>
          <SoundIcon width={24} height={24} className={styles.soundIcon} />
          <p className={styles.noticeText}>
            [공지] 티켓 매크로 방지를 위한 티켓 매수 제한 정책 시행 안내
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
