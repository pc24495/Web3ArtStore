// const { prisma } = require("../../../db/index.ts");

// async function getUsersById(request, response) {
//   const { id } = request.query;
//   if (request.userID === id) {
//     try {
//       const user = await prisma.user.findUnique({
//         where: {
//           id,
//         },
//       });
//       if (user) {
//         response.status(200).json({
//           auth: true,
//           user: {
//             id: user.id,
//             username: user.username,
//             profile_pic_cloudinary_public_id:
//               user.profile_pic_cloudinary_public_id,
//           },
//         });
//       } else {
//         response
//           .status(404)
//           .json({ auth: true, error: `User with id ${id} not found` });
//       }
//     } catch (error) {
//       console.log(error);
//       response.status(400).json({ auth: true, error: "Unknown error" });
//     }
//   } else {
//     request.status(401).json({
//       auth: false,
//       error: "You are not authorized to access this user's data",
//     });
//   }
// }

// exports.getUsersById = getUsersById;
