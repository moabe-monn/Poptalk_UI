'use client'; 
import Image from "next/image";
import { useState } from 'react';
import styles from "./page.module.css";
import Header_home from "../../components/Header_home";
import Square from "../../components/Square";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [partnername, setPartnername] = useState('');
  const router = useRouter();

  return (
    <div className={`${styles.page } ${styles.background}`}>
      <Header_home />
        <Square />
      <main className={`${styles.main}`}>
        <div className={styles.formBlock}>
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
              <div>相手の名前</div>
              <input value={partnername} onChange={(e) => setPartnername(e.target.value)} className={styles.customInput}/>
              <button onClick={() => router.push('/talk')}  className={styles.talk}>Talk</button>
            </>
          )}

          <talk/>
        </div>
        {/* <Page className={styles.talk}/> */}
        <div className={styles.ctas}></div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}

// export function Page({ className }) {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push('/talk');
//   };

//   return (
//     <div>
//       <button onClick={handleClick} className={className}>
//         Talk
//       </button>
//     </div>
//   );
// }


