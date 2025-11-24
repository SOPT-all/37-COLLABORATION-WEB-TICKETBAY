import Header from "@widgets/home/components/header/header";

import * as styles from "./home.css";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage} />
      <div className={styles.gradient} />
      <Header />
      <h1 className={styles.title}>Home</h1>
    </div>
  );
}

export default Home;