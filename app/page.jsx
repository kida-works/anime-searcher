import Image from "next/image";
import styles from "./page.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>アニメ探し</h1>
      <form action="">
        <div>
          <input type="text" />
        </div>
      </form>
      <div></div>
    </main>
  );
}
