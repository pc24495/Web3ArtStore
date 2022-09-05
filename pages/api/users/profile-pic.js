import handler from "../../../backend_functions/helpers/nc.js";
import { usersProfilePicPatch } from "../../../backend_functions/routes/users/profilePic/usersProfilePicPatch.js";
import { verifyJWT } from "../../../backend_functions/middleware/authenticate2.js";

export default handler.patch(verifyJWT, usersProfilePicPatch);
