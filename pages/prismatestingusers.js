import { prisma } from "../db/index.ts";

export default function About({ users, ...props }) {
  console.log(users);
  return (
    <div>
      <h1>Hey</h1>
    </div>
  );
}

export async function getServerSideProps() {
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const users = await prisma.user.findMany();

  return {
    props: {
      users,
    },
  };
}
