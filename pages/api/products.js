import handler from "../../backend_functions/helpers/nc.js";
import getProducts from "../../backend_functions/routes/products/get.js";

export default handler.get(getProducts);
