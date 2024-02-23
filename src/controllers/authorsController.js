import notFound from "../Error/notFound.js";
import { authors } from "../models/index.js";

class AuthorController {
  static listAuthor = async (req, res, next) => {
    //get
    try {
      const authorsresult = authors.find();

      req.result = authorsresult;

      next();
    } catch (err) {
      console.error(err);
      next(err);
    }
  };

  static registerAuthor = async (req, res, next) => {
    //post
    try {
      const author = new authors(req.body);
      const savedAuthor = await author.save();
      res.status(201).send(savedAuthor.toJSON());
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  static listAuthorById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const authorResult = await authors.findById(id);

      if (authorResult !== null) {
        res.status(200).send(authorResult);
      } else {
        next(new notFound("ID author not found"));
      }
    } catch (err) {
      next(err);
    }
  };

  static updateAuthor = async (req, res, next) => {
    //patch
    try {
      const id = req.params.id;
      const authorUpdated = await authors.findByIdAndUpdate(id, {
        $set: req.body,
      });

      res.status(200).send({
        message: "author updated successfully",
        author: authorUpdated,
      });
    } catch (err) {
      next(new notFound("ID author not found"));
    }
  };

  static deletAuthor = async (req, res, next) => {
    //delet
    try {
      const id = req.params.id;
      const deletedauthor = await authors.findByIdAndDelete(id);
      if (deletedauthor !== null) {
        return res.status(404).send({ message: "author not found." });
      }
      res.status(200).send({ message: "author removed successfully" });
    } catch (err) {
      next(new notFound("ID author not found"));
    }
  };
}

export default AuthorController;
