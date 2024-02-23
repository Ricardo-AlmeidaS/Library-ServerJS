import express from "express";
import AuthorController from "../controllers/AuthorsController.js";
import paging from "../middlewares/pagination.js";

const router = express.Router();

router
  .get("/author", AuthorController.listAuthor, paging)
  .get("/author/:id", AuthorController.listAuthorById)
  .post("/author", AuthorController.registerAuthor)
  .put("/author/:id", AuthorController.updateAuthor)
  .delete("/author/:id", AuthorController.deletAuthor);

export default router;
