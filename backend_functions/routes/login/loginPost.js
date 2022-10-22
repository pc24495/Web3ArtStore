const bcrypt = require("bcrypt");
const { prisma } = require("../../../db/index.ts");
const { sign } = require("jsonwebtoken");
const { serialize } = require("cookie");

async function login(request, response) {
  const { username, password } = request.body;
  const errorResponse = {
    username: null,
    password: null,
    misc: null,
  };

  if (typeof username !== "string" || typeof password !== "string") {
    return response.status(400).json({ success: false });
  }

  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });

  if (user) {
    bcrypt.compare(password, user.password, (error, result) => {
      if (result) {
        const token = sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
            username: user.username,
            id: user.id,
          },
          process.env.SECRET
        );
        const serialized = serialize("Web3ArtStoreJWT", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          maxAge: 60 * 60 * 24 * 30,
          path: "/",
        });
        response.setHeader("Set-Cookie", serialized);
        return response.status(200).json({
          success: true,
          user: {
            username: user.username,
            id: user.id,
            profile_pic_cloudinary_public_id:
              user.profile_pic_cloudinary_public_id,
          },
        });
      } else {
        errorResponse.password = "Wrong username/password combination!";
        return response.status(404).json({
          success: false,
          errors: errorResponse,
        });
      }
    });
  } else {
    errorResponse.username = "User does not exist";
    return response.status(404).json({
      success: false,
      errors: errorResponse,
    });
  }
}

exports.login = login;
