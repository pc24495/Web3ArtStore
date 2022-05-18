import handler from "../../backend_functions/helpers/nc.js";
import { register } from "../../backend_functions/routes/register/post.js";

export default handler.post(register);
