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
  const [usernameError, setUsernameError] = useState('');
  const [partnerError, setPartnerError] = useState('');
  const invalidPattern = /[ . \s \/ \* " \/ \\ < > : | ? ¥ ' ` ; , & @ # $ % ^ = ! ~ ]/;
  const isValid = (value) => value.length > 0 && !invalidPattern.test(value);

  // usernameの入力変更時
  const handleUsernameChange = (e) => {
    const v = e.target.value;
    setUsername(v);
    if (v.length === 0) {
      setUsernameError('Input Your name');
    } else if (invalidPattern.test(v)) {
      setUsernameError('Invalid characters are used.');
    } else {
      setUsernameError('');
    }
  };

  // partnernameの入力変更時
  const handlePartnerChange = (e) => {
    const v = e.target.value;
    setPartnername(v);
    if (v.length === 0) {
      setPartnerError(`Input partner's name`);
    } else if (invalidPattern.test(v)) {
      setPartnerError('Invalid characters are used.');
    } else {
      setPartnerError('');
    }
  };

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
                  <input
                    value={username} 
                    onChange={handleUsernameChange}
                    className={styles.customInput}
                  />
                  {setPartnerError && (
                    <p style={{ color: 'red', margin: '4px 0' }}>{usernameError}</p>
                  )}
                <button
                  onClick={() => 
                    setStep(2)}
                    className={styles.talk}
                    disabled={!isValid(username)}
                >
                Continue
              </button>
                </>
              )}

            {step === 2 && (
            <>
              <div>Partner's Name</div>
              <input
                value={partnername}
                onChange={handlePartnerChange}
                className={styles.customInput}
              />
              {setPartnerError && (
                <p style={{ color: 'red', margin: '4px 0' }}>{partnerError}</p>
              )}
              <button
                onClick={() => router.push(`/talk?username=${encodeURIComponent(username)}&partnername=${encodeURIComponent(partnername)}`)}
                className={styles.talk}
                disabled={!isValid(partnername)}
              >
                Talk
              </button>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
