import { withValidation } from "next-validations";
import { object, shape, string, ref } from "yup";

const usernameLengthMsg = "Username must be 3-20 characters";

const schema = object().shape({
  username: string()
    .min(3, usernameLengthMsg)
    .max(20, usernameLengthMsg)
    .required("Field is required"),
  password: string().required("Field is required"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords don't match")
    .required("Field is required"),
});

const registerValidator = withValidation({
  schema,
  type: "Yup",
  mode: "body",
});

export default registerValidator;
