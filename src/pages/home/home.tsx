import Header from "@widgets/home/components/header/header";
import Search from "@widgets/home/components/search/search";

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
    </>
  );
}

export default Home;