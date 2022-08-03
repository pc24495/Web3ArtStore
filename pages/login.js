import classes from "../styles/Login.module.css";
import { useUsername } from "../store/UsernameProvider/UsernameProvider.js";

export default function Login() {
  const { username } = useUsername();

  return (
    <div className={classes.Login}>
      <h1>Hey</h1>
      <p>{username}</p>
    </div>
  );
}
