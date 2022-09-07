import classes from "./Register.module.scss";
import { useUserData } from "../../store/UserDataProvider/UserDataProvider.js";
import { useFormik } from "formik";
import { object, shape, string, ref } from "yup";
import { useRouter } from "next/router";
import axios from "../../axios.js";

const Register = () => {
  const usernameLengthMsg = "Username must be 3-20 characters long";
  const router = useRouter();
  const { userData, setUserData } = useUserData();

  const submit = (values, actions) => {
    // console.log("Hey");
    axios
      .post("/register", {
        username: values.username,
        password: values.password,
      })
      .then((response) => {
        console.log(response.data.user);
        setUserData((prevUser) => {
          return {
            ...prevUser,
            username: response.data.user.username,
            id: response.data.user.id,
            profile_pic_cloudinary_public_id:
              response.data.user.profile_pic_cloudinary_public_id,
          };
        });
        router.push("/profile-pic-upload");
      })
      .catch((error) => {
        console.log(error.response.data.errors);
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    validationSchema: object().shape({
      username: string().min(3, usernameLengthMsg).max(20, usernameLengthMsg),
      password: string().required("Field is required"),
      confirmPassword: string().oneOf(
        [ref("password"), null],
        "Passwords don't match"
      ),
    }),
    onSubmit: submit,
  });

  return (
    <form className={classes.Register} onSubmit={formik.handleSubmit}>
      <header>
        <h1>Register</h1>
      </header>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
      ></input>
      {formik.errors.username && <p>{formik.errors.username}</p>}
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        type="password"
      ></input>
      {formik.touched.password && formik.errors.password && (
        <p>{formik.errors.password}</p>
      )}
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        type="password"
      ></input>
      {formik.errors.confirmPassword && (
        <p className={classes.ConfirmPasswordError}>
          {" "}
          Passwords don&apost match{" "}
        </p>
      )}
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Register;
