import { useRouter } from "next/router";

const Post = (props) => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Post: {pid}</p>;
};

export default Post;
