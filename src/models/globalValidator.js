import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validador: (valor) => valor !== "",
  message: ({ path }) => `the field ${path} was provided in blanck.`,
});
