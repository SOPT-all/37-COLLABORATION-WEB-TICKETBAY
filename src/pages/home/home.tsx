import Accordion from "@widgets/home/components/accordion/accordion";
import Brand from "@widgets/home/components/brand/brand";
import Contact from "@widgets/home/components/contact/contact";
import Header from "@widgets/home/components/header/header";
import Information from "@widgets/home/components/information/information";
import Search from "@widgets/home/components/search/search";
import Terms from "@widgets/home/components/terms/terms";

import FooterMenu from "@shared/components/footer-menu/footer-menu";

import * as styles from "./home.css";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.backgroundImage} />
        <div className={styles.gradient} />
        <Header />
        <Search />
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