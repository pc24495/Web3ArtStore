// import handler from "../../backend_functions/helpers/nc.js";
// import { logout } from "../../backend_functions/routes/logout/logoutPost.js";
// import { verifyJWT } from "../../backend_functions/middleware/authenticate2.js";

// export default handler.post(registerValidator(register));
// export default handler.post(verifyJWT, logout);
import { serialize } from "cookie";

export default async function (req, res) {
  const { cookies } = req;

  const jwt = cookies.Web3ArtStoreJWT;

  if (!jwt) {
    return res.json({ message: "Bro you are already not logged in..." });
  } else {
    const serialised = serialize("Web3ArtStoreJWT", null, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: -1,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    res.status(200).json({ message: "Successfuly logged out!" });
  }
}
