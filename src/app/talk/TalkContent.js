'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Talklog from "../../../components/talklog";
import styles from "../page.module.css";
import talk_style from "./page_talk.module.css";

export default function TalkContent() {
	const searchParams = useSearchParams();
  	const partnername = searchParams.get('partnername');
	const [message, setMessage] = useState('');
	const router = useRouter();

	return (
		<div className={`${styles.page } ${styles.background}`}>
			<div className={`${styles.square3}`}></div>
      		<div className={`${styles.square2}`}></div>
			<div className={`${styles.square}`}>
				<div className={`${talk_style.headersquare}`}>
					<div className={`${talk_style.header}`}>
						<button onClick={() => router.push(`../`)} className={`${talk_style.homeButton}`}>＜</button>
						{` ${partnername}`}
					</div>
				</div>
				<main className={`${talk_style.main}`}>
					<div className={`${talk_style.scrollbar}`}>
						a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>
					</div>
				</main>
				<div className={`${talk_style.footer}`}>
					<input
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						className={talk_style.messageInput}
						placeholder="メッセージを入力..."
					/>
					<button className={`${talk_style.sendButton}`}>↑</button>
				</div>
			</div>
		</div>
	);
}
