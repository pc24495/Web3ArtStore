import classes from "../styles/About.module.css";

export default function About({ title, ...props }) {
  return (
    <div className={classes.About}>
      <h1>Hey</h1>
      <p>{title}</p>
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
