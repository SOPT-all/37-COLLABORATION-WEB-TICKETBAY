import Header from "@widgets/home/components/header/header";

import * as styles from "./home.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage} />
      <div className={styles.gradient} />
      <Header />
    </div>
  );
}

export default Home;