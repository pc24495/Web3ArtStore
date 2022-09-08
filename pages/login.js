import classes from "../styles/Login.module.css";
import Layout from "../components/higher order components/Layout.js";
import LoginComponent from "../components/Login/Login.js";

export default function Login() {
  return (
    <div className={classes.LoginPage}>
      <LoginComponent></LoginComponent>
    </div>
  );
}

Login.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
