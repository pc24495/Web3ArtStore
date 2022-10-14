import handler from "../../backend_functions/helpers/nc.js";
import getProducts from "../../backend_functions/routes/products/getProducts.js";
import postProducts from "../../backend_functions/routes/products/postProducts.js";
import { verifyJWT } from "../../backend_functions/middleware/authenticate.js";

export default handler.get(getProducts).post(verifyJWT, postProducts);

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb", // Set desired value here
    },
  },
};
