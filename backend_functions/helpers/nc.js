import nextConnect from "next-connect";

export default nextConnect({
  onError: (error, request, response, next) => {
    console.error(error.stack);
    response.status(500).end("Something broke!");
  },
  onNoMatch: (request, response) => {
    response.status(404).end("Page is not found");
  },
});
