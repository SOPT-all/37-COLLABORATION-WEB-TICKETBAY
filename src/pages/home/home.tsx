import { SoundIcon } from "@assets/icons";

import Header from "@widgets/home/components/header/header";
import Search from "@widgets/home/components/search/search";
import Category from "@widgets/home/components/category/category";

import * as styles from "./home.css";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.backgroundImage} />
        <div className={styles.gradient} />
        <Header />
        <Search />
        <Category />
        <div className={styles.noticeBanner}>
          <SoundIcon width={24} height={24} className={styles.soundIcon} />
          <span className={styles.noticeText}>
            [공지] 티켓 매크로 방지를 위한 티켓 매수 제한 정책 시행 안내
          </span>
        </div>
      </div>
    </>
  );
}

export default Home;