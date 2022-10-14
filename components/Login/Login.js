import classes from "./Login.module.scss";
import { useFormik } from "formik";
import Link from "next/link";
import axios from "../../axios.js";
import { useUserData } from "../../store/UserDataProvider/UserDataProvider.js";
import { useRouter } from "next/router";

const Login = () => {
  const { userData, setUserData } = useUserData();
  const router = useRouter();

  const validateForm = (values) => {
    return true;
  };

  const submit = (values, actions) => {
    // console.log(values);
    axios
      .post("/loginRoute", {
        username: values.username,
        password: values.password,
      })
      .then(async (response) => {
        // console.log(response.data);
        // console.log(response.data.user);
        await setUserData((prevUser) => {
          // console.log(response.data.user.id);
          return {
            ...prevUser,
            username: response.data.user.username,
            user_id: response.data.user.id,
            profile_pic_cloudinary_public_id:
              response.data.user.profile_pic_cloudinary_public_id,
          };
        });
        // console.log("Success login");
        router.push("/");
      })
      .catch((error) => {
        console.log(error.response.data);
        // const {
        //   username: usernameErrors,
        //   password: passwordErrors,
        // } = error.response.data.errors;
        // actions.setErrors({
        //   fields: {
        //     username: usernameErrors,
        //     password: passwordErrors,
        //   },
        // });
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: validateForm,
    onSubmit: submit,
  });

  return (
    <form className={classes.Login} onSubmit={formik.handleSubmit}>
      <header>
        <h1>Login</h1>
      </header>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        type="password"
      ></input>
      <button>Sign In</button>
      <Link href="/register">Create account</Link>
    </form>
  );
};

// <p>{counter}</p>

export default Login;
