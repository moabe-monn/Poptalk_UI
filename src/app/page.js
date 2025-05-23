import Image from "next/image";
import styles from "./page.module.css";
import Header_home from "../../components/Header_home";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header_home />
      <main className={styles.main}>
        <ol>
            <p>自分の名前<input type="text" name="username"></input></p>
            <p>相手の名前<input type="text" name="username"></input></p>
            <p>Talk</p>
        </ol>

        <div className={styles.ctas}></div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
