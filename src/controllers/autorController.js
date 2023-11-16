import NaoEncontrado from "../erros/NaoEncontrado.js";
import { autores } from "../models/index.js";

class AutorController {
  static async listarAutores(req, res) {
    try {
      const listaAutores = await autores.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }

  static async listarAutorPorId(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autores.findById(id);

      if (autorEncontrado !== null) {
        res.status(200).send(autorEncontrado);
      } else {
        next(new NaoEncontrado("Id do autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autores.create(req.body);
      res.status(201).json({ message: "criado com sucesso", livro: novoAutor });
    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;

      const autorResultado = await autores.findByIdAndUpdate(id, {
        $set: req.body,
      });

      if (autorResultado !== null) {
        res.status(200).json({ message: "Autor atualizado com sucesso" });
      } else {
        next(new NaoEncontrado("Id do autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  }

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const autorResultado = await autores.findByIdAndDelete(id);

      if (autorResultado !== null) {
        res.status(200).send({ message: "Autor removido com sucesso" });
      } else {
        next(new NaoEncontrado("Id do Autor não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };
}

export default AutorController;
