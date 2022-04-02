import classes from "../styles/About.module.css";
import { useUsername } from "../store/UsernameProvider/UsernameProvider.js";

export default function About({ title, ...props }) {
  const { username } = useUsername();

  return (
    <div className={classes.About}>
      <h1>Hey</h1>
      <p>{title}</p>
      <p>{username}</p>
    </div>
  );
}

export async function getStaticProps() {
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      title: "Prajwal's Test Blog",
    },
  };
}
