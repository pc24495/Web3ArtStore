import handler from "../../backend_functions/helpers/nc.js";
import { login } from "../../backend_functions/routes/login/loginPost.js";
// const { prisma } = require("../../db/index.ts");
// const bcrypt = require("bcrypt");
// const { sign } = require("jsonwebtoken");
// const { serialize } = require("cookie");

// export default handler.post(registerValidator(register));
// export default handler.post(login);

// function compareAsync(param1, param2) {
//   return new Promise(function (resolve, reject) {
//     bcrypt.compare(param1, param2, function (err, res) {
//       if (err) {
//         reject(false);
//       } else {
//         resolve(true);
//       }
//     });
//   });
// }

export default handler.post(login);

// export default async function handler(request, response) {
//   if (request.method === "POST") {
//     const { username, password } = request.body;
//     console.log(request.body);
//     const errorResponse = {
//       username: null,
//       password: null,
//       misc: null,
//     };
//     const user = await prisma.user.findUnique({
//       where: {
//         username,
//       },
//     });
//     let isUserValid = false;
//     // console.log(user);
//     // return res.status(200).json({ success: true });
//     if (user) {
//       console.log("In user");
//       compareAsync(password, user.password)
//         .then((success) => {
//           if (success) {
//             return res.status(200).json({ success: true });
//           } else {
//             console.log("Bad news");
//           }
//         })
//         .catch((err) => console.log("blahh"));

//       //   await bcrypt.compare(password, user.password, async (error, result) => {
//       //     if (result) {
//       //       console.log(result);
//       //       console.log(error);
//       //       console.log("Working");
//       //       const token = await sign(
//       //         { exp: 60 * 60 * 60, username },
//       //         process.env.SECRET
//       //       );
//       //       //   const serialized = serialize("Token", token, {
//       //       //     httpOnly: true,
//       //       //     secure: process.env.NODE_ENV !== "development",
//       //       //     maxAge: 60 * 60 * 24,
//       //       //     sameSite: "strict",
//       //       //     path: "/",
//       //       //   });
//       //       console.log(token);
//       //       return response.status(200).json({ success: true });

//       //       //   await response.setHeader("Set-Cookie", serialized);
//       //       isUserValid = true;
//       //     }
//       //   });
//     } else {
//       console.log("Testing");
//       errorResponse.username = "User does not exist";
//       return response.status(404).json({
//         success: false,
//         errors: errorResponse,
//       });
//     }
//   }
// }
