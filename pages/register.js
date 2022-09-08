import classes from "../styles/Register.module.css";
// import { useUsername } from "../store/UsernameProvider/UsernameProvider.js";
import RegisterComponent from "../components/Register/Register.js";
import Layout from "../components/higher order components/Layout.js";

export default function Register() {
  //   const { username } = useUsername();

  return (
    <div className={classes.RegisterPage}>
      <RegisterComponent></RegisterComponent>
    </div>
  );
}

Register.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
