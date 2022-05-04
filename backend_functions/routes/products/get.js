import { prisma } from "../../../db/index.ts";

export default async function getProducts(request, response) {
  // response.json({ payload: "asdfasdfasdf" });
  const products = await prisma.product.findMany();
  response.json({ products });
}
