import BaseError from "./baseError.js";

class badRequest extends BaseError {
  constructor(mensagem = "One or more provided data is incorrect") {
    super(mensagem, 400);
  }
}

export default badRequest;
