import { prisma } from "../../../db/index.ts";
import qs from "qs";
import isNumericInt from "../../helpers/isNumericInt.js";
import madeWithOptions from "../../../configs/madeWith.js";

export default async function getProducts(request, response) {
  let { productIDs, filters, num } = qs.parse(request.query);
  console.log("1) Product IDs: ", productIDs, "\nFilters: ", filters);

  // Validation start
  if (!Array.isArray(productIDs)) {
    productIDs = [];
  }

  if (!productIDs.every((id) => isNumericInt(id))) {
    return response.status(400).json({ success: false });
  }

  productIDs = productIDs.map((id) => parseInt(id));

  if (!filters) {
    return response.status(400).json({ success: false });
  }

  if (!isNumericInt(filters.minPrice)) {
    filters.minPrice = 0;
  } else {
    filters.minPrice = parseInt(filters.minPrice);
  }

  if (!isNumericInt(filters.maxPrice)) {
    filters.maxPrice = 0;
  } else {
    filters.maxPrice = parseInt(filters.maxPrice);
  }

  if (!Array.isArray(filters.madeWith)) {
    filters.madeWith = [];
  }

  console.log("2) Product IDs: ", productIDs, "\nFilters: ", filters);

  if (!filters.madeWith.every((option) => madeWithOptions.includes(option))) {
    return response.status(400).json({ success: false });
  }
  //Validation end

  return response.status(200).json({ message: "Success!" });
}
