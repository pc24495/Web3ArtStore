import classes from "../styles/About.module.css";
import { useUsername } from "../store/UsernameProvider/UsernameProvider.js";

export default function About({ title, users, ...props }) {
  const { username } = useUsername();

  return (
    <div className={classes.About}>
      <h1>Hey</h1>
      <p>{title}</p>
      <p>{username}</p>
      {users.map((user) => (
        <p>{user.username}</p>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const dateStripped = require("../helpers/dateStripped.js");
  const Users = require("../database/models/Users.js");

  let users = await Users.query().withGraphFetched("products");

  users = dateStripped(users);

  return {
    props: {
      title: "Prajwal's Awesome Test Blog",
      users,
    },
  };
}
