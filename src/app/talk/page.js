import Talklog from "../../../components/talklog";
import styles from "../page.module.css";

export default function Home() {
	return (
		<div className={`${styles.page } ${styles.background}`}>
			<div className={`${styles.square3}`}></div>
      		<div className={`${styles.square2}`}></div>
			<div className={`${styles.square}`}>
				<div>
					<Talklog />
				</div>
			</div>
		</div>
	);
}