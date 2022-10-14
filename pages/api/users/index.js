import handler from "../../../backend_functions/helpers/nc.js";
import { getUsersByToken } from "../../../backend_functions/routes/users/getUsersByToken.js";
import { verifyJWT } from "../../../backend_functions/middleware/authenticate.js";

export default handler.get(verifyJWT, getUsersByToken);
