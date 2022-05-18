import styles from "../../styles/Pets.module.css";
import { useRouter } from "next/router";

export default function Pets({ title, ...props }) {
  // const { username } = useUsername();
  const router = useRouter();

  const reRoute = (link) => {
    router.push(`/pets/${link}`);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.Pets}>
          <h1>Pets</h1>
          <div className={styles.PetContainer} onClick={() => reRoute("Fox")}>
            Fox 11:30 5/30
          </div>
          <div className={styles.PetContainer} onClick={() => reRoute("Kitty")}>
            Kitty 12:30 5/22
          </div>
        </div>
      </main>
    </div>
  );
}
