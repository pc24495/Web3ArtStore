import classes from "../styles/Register.module.css";
// import { useUsername } from "../store/UsernameProvider/UsernameProvider.js";
import RegisterComponent from "../components/Register/Register.js";

export default function Register() {
  //   const { username } = useUsername();

  return (
    <div className={classes.RegisterPage}>
      <RegisterComponent></RegisterComponent>
    </div>
  );
}
