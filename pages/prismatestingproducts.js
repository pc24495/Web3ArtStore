import { prisma } from "../db/index.ts";

export default function About({ products, ...props }) {
  console.log(products);
  return (
    <div>
      <h1>Hey</h1>
    </div>
  );
}

export async function getServerSideProps() {
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const products = await prisma.product.findMany();

  return {
    props: {
      products,
    },
  };
}
