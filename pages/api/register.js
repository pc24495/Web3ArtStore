import handler from "../../backend_functions/helpers/nc.js";
import { register } from "../../backend_functions/routes/register/registerPost.js";
import registerValidator from "../../backend_functions/validators/register/registerValidator.js";

// export default handler.post(registerValidator(register));
export default handler.post(register);
