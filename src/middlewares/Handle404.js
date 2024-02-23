import notFound from "../Error/notFound.js";

function Handler404(req, res, next) {
  const err404 = new notFound();
  next(err404);
}

export default Handler404;
