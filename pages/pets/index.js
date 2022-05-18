import styles from "../../styles/Pets.module.css";

export default function Pets({ title, ...props }) {
  // const { username } = useUsername();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.Pets}>
          <div className={styles.PetContainer}></div>
          <div className={styles.PetContainer}></div>
        </div>
      </main>
    </div>
  );
}
