const bcrypt = require("bcrypt");
const { prisma } = require("../../../db/index.ts");
// const jwt = require("jsonwebtoken");
const { sign } = require("jsonwebtoken");
// const cookie = require("cookie");
const { serialize } = require("cookie");
const SALT_ROUNDS = 10;

async function register(request, response) {
  const { username, password } = request.body;
  // console.log(username);
  const errorResponse = {
    username: null,
    password: null,
    misc: null,
  };
  // console.log("Bla");
  bcrypt.hash(password, SALT_ROUNDS, async (err, hash) => {
    try {
      const newUser = await prisma.user.create({
        data: {
          username: username,
          password: hash,
        },
      });
      const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
          username: newUser.username,
          id: newUser.id,
        },
        process.env.SECRET
      );

      const serialised = serialize("Web3ArtStoreJWT", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
      response.setHeader("Set-Cookie", serialised);
      return response.status(200).json({
        success: true,
        user: {
          username: newUser.username,
          id: newUser.id,
          profile_pic_cloudinary_public_id:
            newUser.profile_pic_cloudinary_public_id,
        },
      });
    } catch (error) {
      if (error.code === "P2002") {
        errorResponse.username = "Username already taken!";
        return response.status(409).json({
          errors: errorResponse,
          success: false,
        });
      } else {
        console.log(error);
        return response.status(400).json({
          errors: errorResponse,
          success: false,
        });
      }
    }
  });
}

exports.register = register;
