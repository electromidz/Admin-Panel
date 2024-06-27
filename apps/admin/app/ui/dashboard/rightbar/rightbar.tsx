import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import styles from "./rightbar.module.css";
import Image from "next/image";

export default function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of admin dashboard?
          </h3>
          <span className={styles.subtitle}>Take 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        {/* <div className={styles.bgContainer}>
          <Image src="/astonaut.png" alt="" fill className={styles.bg} />
        </div> */}
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of admin dashboard?
          </h3>
          <span className={styles.subtitle}>Take 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}
