import styles from "./pagination.module.css";
export default function Pagination() {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled>
        Previus
      </button>
      <button className={styles.button}>next</button>
    </div>
  );
}
