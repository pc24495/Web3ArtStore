import { useRouter } from "next/router";
import styles from "../../styles/PetsIndiv.module.css";

const Post = (props) => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.PetsIndiv}>
          {pid === "Fox" && <p>11:30, Monday 5/30</p>}
          {pid === "Kitty" && <p>12:30, Sunday 5/22</p>}
        </div>
      </div>
    </div>
  );
};

export default Post;
