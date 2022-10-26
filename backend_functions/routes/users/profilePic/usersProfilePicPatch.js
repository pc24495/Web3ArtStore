const { prisma } = require("../../../../db/index.ts");

async function usersProfilePicPatch(request, response) {
  const { profile_pic } = request.body;
  const { userID } = request;
  const formData = new URLSearchParams();
  formData.append("file", profile_pic);
  formData.append("upload_preset", `web-3-art-store`);
  formData.append("folder", `web-3-art-store/${process.env.NODE_ENV}`);
  const cloudinaryResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
    {
      method: "post",
      body: formData,
    }
  ).then((cloudinaryResponse) => cloudinaryResponse.json());
  console.log(cloudinaryResponse);
  const user = await prisma.user.update({
    where: {
      id: userID,
    },
    data: {
      profile_pic_cloudinary_public_id: cloudinaryResponse.public_id,
    },
  });

  response.status(200).json({
    success: true,
    profile_pic_cloudinary_public_id: user.profile_pic_cloudinary_public_id,
  });
}

exports.usersProfilePicPatch = usersProfilePicPatch;
