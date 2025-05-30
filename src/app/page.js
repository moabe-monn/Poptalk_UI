'use client'; 
import { useState } from 'react';
import styles from "./page.module.css";
import Header_home from "../../components/Header_home";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [partnername, setPartnername] = useState('');
  const router = useRouter();

  return (
    <div className={`${styles.page } ${styles.background}`}>
      <div className={`${styles.square3}`}></div>
      <div className={`${styles.square2}`}></div>
      <div className={`${styles.square} `}> 
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Cherry+Bomb+One&display=swap" rel="stylesheet" />
        <Header_home />
          <main className={`${styles.main}`}>
              <p className={styles.heading}>Let's talk!</p>
              {step === 1 && (
                <>
                  <div>Your Name</div>
                  <input value={username} onChange={(e) => setUsername(e.target.value)} className={styles.customInput}/>
                  <button onClick={() => setStep(2)}  className={styles.talk}>Continue</button>
                </>
              )}

              {step === 2 && (
                <>
                  <div>Parter's Name</div>
                  <input value={partnername} onChange={(e) => setPartnername(e.target.value)} className={styles.customInput}/>
                  <button onClick={() => router.push(`/talk?partnername=${encodeURIComponent(partnername)}`)}  className={styles.talk}>Talk</button>
                </>
              )}
          </main>
      </div>
    </div>
  );
}


