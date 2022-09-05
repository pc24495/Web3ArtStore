const jwt = require("jsonwebtoken");
const { prisma } = require("../../db/index.ts");

export function verifyJWT(request, response, next) {
  if (request.cookies?.Web3ArtStoreJWT) {
    const token = request.cookies.Web3ArtStoreJWT;
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
      if (err) {
        // console.log(err);
        // console.log("Error verifying");
        return response
          .status(401)
          .json({ auth: false, message: "You failed to authenticate" });
      } else {
        // console.log(decoded);
        request.userID = decoded.id;
        next();
      }
    });
  } else {
    return response.status(401).json({
      auth: false,
      message: "You did not provide a token authenticate2.js",
    });
  }
}
