'use client';
import { useSearchParams } from 'next/navigation';
import Talklog from "../../../components/talklog";
import styles from "../page.module.css";
import talk_style from "./page_talk.module.css";

export default function Talk() {
	const searchParams = useSearchParams();
  	const partnername = searchParams.get('partnername');

	return (
		<div className={`${styles.page } ${styles.background}`}>
			<div className={`${styles.square3}`}></div>
      		<div className={`${styles.square2}`}></div>
			<div className={`${styles.square}`}>
				<div className={`${talk_style.headersquare}`}>
					<div className={`${talk_style.header}`}>
						{` ${partnername}`}
					</div>
				</div>
				<div className={`${talk_style.footer}`}>

				</div>
			</div>
		</div>
	);
}