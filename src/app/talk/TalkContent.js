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
						[2025-06-01 01:33:12] Alice: 言語処理系試験えぐい<br></br>
						[2025-06-01 01:33:20] Alice: 範囲どこ<br></br>
						[2025-06-01 01:33:33] Bob: 草<br></br>
						[2025-06-01 01:33:45] Bob: 俺も知らん<br></br>
						[2025-06-01 01:34:10] Alice: 何してんねん.<br></br>
						[2025-06-01 01:34:25] Bob: 終わった. <br></br>
						[2025-06-01 01:35:00] Bob: もう飯行こうぜ<br></br>
						[2025-06-01 01:35:32] Bob: 流石に<br></br>
						[2025-06-01 01:35:51] Bob: あり<br></br>
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
