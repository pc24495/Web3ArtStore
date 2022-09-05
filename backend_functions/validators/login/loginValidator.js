import { withValidation } from "next-validations";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
});

const loginValidator = withValidation({
  schema,
  type: "Yup",
  mode: "body",
});

export default loginValidator;
