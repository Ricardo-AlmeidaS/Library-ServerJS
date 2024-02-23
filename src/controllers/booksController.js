import notFound from "../Error/notFound.js";
import { authors, books } from "../models/index.js";

class BookController {
  static listBooks = async (req, res, next) => {
    try {
      const searchbooks = books.find();

      req.result = searchbooks;

      next();
    } catch (err) {
      console.error(err);
      next(err);
    }
  };

  static listByFilter = async (req, res, next) => {
    try {
      const search = await processSearch(req.query);

      if (search !== null) {
        const booksResult = books.find(search).populate("author");

        res.result = booksResult;

        next();
      } else {
        res.status(200).send([]);
      }
    } catch (err) {
      next(err);
    }
  };

  static listBookById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const bookResult = await books
        .findById(id)
        .populate("author", "name")
        .exec();

      if (bookResult !== null) {
        res.status(200).send(bookResult);
      } else {
        next(new notFound("Book ID not found."));
      }
    } catch (error) {
      next(error);
    }
  };

  static registerBook = async (req, res, next) => {
    try {
      let book = new books(req.body);
      const savedBook = await book.save();

      res.status(201).send(savedBook.toJSON());
    } catch (err) {
      next(err);
    }
  };

  static updateBook = async (req, res, next) => {
    try {
      const id = req.params.id;
      const bookUpdated = await books.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );

      if (bookUpdated !== null) {
        res
          .status(200)
          .send({ message: "Book updated successfully", book: bookUpdated });
      } else {
        next(new notFound("Book not found"));
      }
    } catch (err) {
      next(err);
    }
  };

  static deleteBook = async (req, res, next) => {
    try {
      const id = req.params.id;
      const deletedBook = await books.findByIdAndDelete(id);
      if (deletedBook !== null) {
        res.status(200).send({ message: "Book removed successfully" });
      } else {
        next(new notFound("Book not found."));
      }
    } catch (err) {
      next(err);
    }
  };
}

async function processSearch(params) {
  let { publisher, title, minPages, maxPages, authorName } = params;
  let search = {};

  if (publisher) search.publisher = publisher;
  if (title) search.title = { $regex: title, $options: "i" };

  if (minPages || maxPages) search.numberpages = {};

  if (minPages) search.numberpages.$gte = minPages;
  if (maxPages) search.numberpages.$lte = maxPages;

  if (authorName) {
    const author = await authors.findOne({ name: authorName });

    if (author !== null) {
      search.author = author._id;
    } else {
      search = null;
    }
  }
  return search;
}

export default BookController;
