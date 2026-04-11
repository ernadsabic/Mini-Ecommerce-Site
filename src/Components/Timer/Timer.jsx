import styles from "./Timer.module.css";
import { useCountdown } from "../../Hooks/useCountdown";



export const Timer = () => {
    
    const {time} = useCountdown();
  
    return (
    <>
      <div className={styles.countWrapper}>
        <div className={styles.countFlex}>
          <span className={styles.countLabel}>Days</span>
          <span className={styles.countTime}>{time?.days}</span>
        </div>
        <span className={styles.dots}>:</span>
        <div className={styles.countFlex}>
          <span className={styles.countLabel}>Hours</span>
          <span className={styles.countTime}>{time?.hours}</span>
        </div>
        <span className={styles.dots}>:</span>
        <div className={styles.countFlex}>
          <span className={styles.countLabel}>Minutes</span>
          <span className={styles.countTime}>{time?.minutes}</span>
        </div>
        <span className={styles.dots}>:</span>
        <div className={styles.countFlex}>
          <span className={styles.countLabel}>Seconds</span>
          <span className={styles.countTime}>{time?.seconds}</span>
        </div>
      </div>
    </>
  );
};
