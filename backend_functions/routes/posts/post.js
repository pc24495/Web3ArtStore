async function postPosts(request, response) {
  response.json({ payload: "Post posted" });
}

exports.postPosts = postPosts;
