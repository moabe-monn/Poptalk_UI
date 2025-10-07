'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from "../page.module.css";
import talk_style from "./page_talk.module.css";
// import  WebSocketChat from '../../../components/WebSocketChat';

export default function TalkContent() {
	const searchParams = useSearchParams();
  	const partnername = searchParams.get('partnername');
	const username = searchParams.get('username');
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
				<WebSocketChat username={username} partnername={partnername} />
			</div>
		</div>
	);
}
