import { useState } from "react";

import { SoundIcon } from "@assets/icons";

import Accordion from "@widgets/home/components/accordion/accordion";
import Brand from "@widgets/home/components/brand/brand";
import Category from "@widgets/home/components/category/category";
import Contact from "@widgets/home/components/contact/contact";
import Header from "@widgets/home/components/header/header";
import Information from "@widgets/home/components/information/information";
import Search from "@widgets/home/components/search/search";
import Sidebar from "@widgets/home/components/sidebar/sidebar";
import Terms from "@widgets/home/components/terms/terms";

import FooterMenu from "@shared/components/footer-menu/footer-menu";

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

      <footer className={styles.footer}>
        <FooterMenu />
        <div className={styles.inner}>
          <Contact />
          <Brand />
          <Accordion />
          <Terms />
          <Information />
        </div>
      </footer>
    </>
  );
}

export default Home;
