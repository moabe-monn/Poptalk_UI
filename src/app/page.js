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
        <div className={styles.formBlock}>
           <p className={styles.heading}>Let's talk!</p>
          <div>
            自分の名前<br />
            <input type="text" name="username" className={styles.customInput} />
          </div>
          <div>
            相手の名前<br />
            <input type="text" name="partnername" className={styles.customInput} />
          </div>
          <div className={styles.talk}>
            <ul>Talk</ul>
          </div>
        </div>

        <div className={styles.ctas}></div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
