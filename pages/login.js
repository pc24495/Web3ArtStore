import classes from "../styles/Login.module.css";
import LoginComponent from "../components/Login/Login.js";

export default function Login() {
  return (
    <div className={classes.LoginPage}>
      <LoginComponent></LoginComponent>
    </div>
  );
}
