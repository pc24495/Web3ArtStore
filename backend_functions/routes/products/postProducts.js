import { prisma } from "../../../db/index.ts";
import formidable from "formidable";
import FormData from "form-data";
import areAllPropertiesNull from "../../helpers/areAllPropertiesNull.js";
import madeWithOptions from "../../../configs/madeWith.js";

export default async function postProducts(request, response) {
  const {
    userID,
    body: { name, file, madeWith, priceInCents },
  } = request;

  const errorResponse = {
    name: null,
    file: null,
    madeWith: null,
    priceInCents: null,
    misc: null,
  };

  if (!file) {
    errorResponse.file = "Image is required";
  }

  if (!name) {
    errorResponse.name = "Name is required";
  } else {
    if (name.length > 30) {
      errorResponse.name = "Name must be <31 characters";
    }
  }

  if (!madeWith) {
    errorResponse.madeWith = "Made with is required";
  } else {
    if (!madeWithOptions.includes(madeWith)) {
      errorResponse.madeWith = "Invalid option";
    }
  }

  if (!priceInCents) {
    errorResponse.priceInCents = "Price is required";
  } else {
    if (!Number.isInteger(priceInCents)) {
      errorResponse.priceInCents = "Price (in cents) must be an integer";
    }
  }

  if (areAllPropertiesNull(errorResponse)) {
    const formData = new URLSearchParams();
    formData.append("file", file);
    formData.append("upload_preset", `web-3-art-store`);
    formData.append("folder", `web-3-art-store/${process.env.NODE_ENV}`);
    const cloudinaryResponse = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "post",
        body: formData,
      }
    )
      .then((cloudinaryResponse) => cloudinaryResponse.json())
      .catch((error) => console.log(error));
    try {
      await prisma.product.create({
        data: {
          name,
          authorId: userID,
          picture_cloudinary_public_id: cloudinaryResponse.public_id,
          made_with: madeWith,
          price_in_cents: priceInCents,
        },
      });
      return response.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
    }
    // return response.status(200).json({ success: true });
  } else {
    console.log(errorResponse);
    return response.status(400).json({ success: false, errorResponse });
  }

  return response.status(200).json({ message: "Success!" });
}
