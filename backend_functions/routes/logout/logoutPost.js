const jwt = require("jsonwebtoken");
const cookie = require("cookie");

function compareAsync(param1) {
  return new Promise(function (resolve, reject) {
    jwt.verify(param1, process.env.SECRET, async (err, decoded) => {
      if (err) {
        console.log("Error verifying");
        reject({ success: false });
        // return response
        //   .status(401)
        //   .json({ auth: false, message: "You failed to authenticate" });
      } else {
        resolve({ success: true, userID: decoded.id });
        // userID = decoded.id;
      }
    });
  });
}

async function logout(request, response) {
  if (request.cookies?.Web3ArtStoreJWT) {
    let userID = null;
    console.log("Logging out");
    const token = request.cookies.Web3ArtStoreJWT;
    // console.log(token);
    compareAsync(token).then((result) => {
      if (result.success) {
        console.log(result.userID);
      } else {
        console.log("Failure");
      }
    });
    // await jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    //   if (err) {
    //     console.log("Error verifying");
    //     return response
    //       .status(401)
    //       .json({ auth: false, message: "You failed to authenticate" });
    //   } else {
    //     userID = decoded.id;
    //   }
    // });

    if (userID) {
      // const token = jwt.sign({ id: userID }, process.env.SECRET, {
      //   expiresIn: "1s",
      // });
      response.setHeader("Set-Cookie", [
        cookie.serialize("Web3ArtStoreJWT", null, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          maxAge: -1,
          sameSite: "strict",
          path: "/",
        }),
      ]);
      return response.status(200).json({
        success: true,
      });
    }
  } else {
    return response.status(401).json({
      auth: false,
      message: "You did not provide a token logoutPost.js",
    });
  }
}

exports.logout = logout;
