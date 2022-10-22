import handler from "../../backend_functions/helpers/nc.js";
import { login } from "../../backend_functions/routes/login/loginPost.js";

export default handler.post(login);
