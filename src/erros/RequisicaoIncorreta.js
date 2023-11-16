import ErroBase from "./ErroBAse.js";

class RequesicaoIncoreta extends ErroBase {
  constructor(mensagem = "Um ou mais dados fornecidos estçao incorretos") {
    super(mensagem, 400);
  }
}

export default RequesicaoIncoreta;
