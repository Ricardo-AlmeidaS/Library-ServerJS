import mongoose from "mongoose";
import BaseError from "../Error/baseError.js";
import badRequest from "../Error/badRequest.js";
import ValidationError from "../Error/validationError.js";

// eslint-disable-next-line no-unused-vars
function errorHandling(err, req, res, next) {
  if (err instanceof mongoose.Error.CastError) {
    new badRequest().sendResponse(res);
  } else if (err instanceof mongoose.Error.ValidationError) {
    new ValidationError(err).sendResponse(res);
  } else if (err instanceof BaseError) {
    err.sendResponse(res);
  } else {
    new BaseError().sendResponse(res);
  }
}

export default errorHandling;
