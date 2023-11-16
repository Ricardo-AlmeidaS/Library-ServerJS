import ErroBase from "./ErroBAse.js";

class NaoEncontrado extends ErroBase {
  constructor(mensagem = "Pagina não encontrada") {
    super(mensagem, 400);
  }
}

export default NaoEncontrado;
