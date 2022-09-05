// import { getSession } from "next-auth/client";
import handler from "../../backend_functions/helpers/nc.js";
import getPosts from "../../backend_functions/routes/posts/getPosts.js";
import { postPosts } from "../../backend_functions/routes/posts/post.js";
import validatePostPosts from "../../backend_functions/validators/posts/posts.js";

export default handler.get(getPosts).post(validatePostPosts(postPosts));
