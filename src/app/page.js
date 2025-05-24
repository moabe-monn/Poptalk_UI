import Image from "next/image";
import styles from "./page.module.css";
import Header_home from "../../components/Header_home";
import Square from "../../components/Square";

export default function Home() {
  return (
    <div className={`${styles.page } ${styles.background}`}>
      <Header_home />
        <Square />
      <main className={`${styles.main}`}>
        <ol>
            <p>Let's talk!</p>
            <p>自分の名前</p>
            <p><input type="text" name="username"></input></p>
            <p>相手の名前</p>
            <p><input type="text" name="username"></input></p>
            <p>Talk</p>
        </ol>

        <div className={styles.ctas}></div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
