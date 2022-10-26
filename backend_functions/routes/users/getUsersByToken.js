const { prisma } = require("../../../db/index.ts");
const jwt = require("jsonwebtoken");

async function getUsersByToken(request, response) {
  try {
    if (request.cookies?.Web3ArtStoreJWT) {
      let userID = null;
      const token = request.cookies.Web3ArtStoreJWT;

      const decoded = jwt.verify(token, process.env.SECRET);
      userID = decoded.id;
      if (userID) {
        const user = await prisma.user.findUnique({
          where: {
            id: request.userID,
          },
        });
        if (user) {
          return response.status(200).json({
            auth: true,
            user: {
              id: user.id,
              username: user.username,
              profile_pic_cloudinary_public_id:
                user.profile_pic_cloudinary_public_id,
            },
          });
        } else {
          return response.status(404).json({
            auth: true,
            error: `User with id ${request.userID} not found`,
          });
        }
      }
    } else {
      return response.status(401).json({
        auth: false,
        message: "You did not provide a token getUsersByToken.js",
      });
    }
  } catch (error) {
    console.log(error);
    response.status(400).json({ auth: true, error: "Unknown error" });
  }
}

exports.getUsersByToken = getUsersByToken;
