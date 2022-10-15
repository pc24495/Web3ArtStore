import { prisma } from "../../../db/index.ts";
import qs from "qs";
import isNumeric from "../../helpers/isNumeric.js";
import madeWithOptions from "../../../configs/madeWith.js";

export default async function getProducts(request, response) {
  let { productIDs, filters, num } = qs.parse(request.query);
  console.log(productIDs, filters);

  // Validation start
  if (!Array.isArray(productIDs)) {
    productIDs = [];
  }

  if (!productIDs.every((id) => isNumeric(id))) {
    return response.status(400).json({ success: false });
  }

  productIDs = productIDs.map((id) => parseInt(id));

  if (!filters) {
    return response.status(400).json({ success: false });
  }

  if (!Number.isInteger(filters.minPrice)) {
    filters.minPrice = 0;
  }

  if (!Number.isInteger(filters.maxPrice)) {
    filters.maxPrice = 0;
  }

  if (!Array.isArray(filters.madeWith)) {
    filters.madeWith = [];
  }

  if (!filters.madeWith.every((option) => madeWithOptions.includes(option))) {
    return response.status(400).json({ success: false });
  }
  //Validation end

  return response.status(200).json({ message: "Success!" });
}
