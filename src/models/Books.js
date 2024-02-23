import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: { type: String },
  title: {
    type: String,
    required: [true, "The title is required "],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "autores",
    required: [true, "The author is required"],
  },
  publisher: {
    type: String,
    required: [true, "The publisher is required"],
  },
  pageCount: {
    type: Number,
    validate: {
      validator: (valor) => {
        return valor >= 10 && valor <= 5000;
      },
      message: "The nomber of pager must be between 10 and 5000",
    },
  },
});

const books = mongoose.model("books", bookSchema);

export default books;
