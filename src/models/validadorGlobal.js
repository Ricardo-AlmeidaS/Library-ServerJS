import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
  validador: (valor) => valor !== "",
  message: ({ path }) => `O campo ${path} foi fornecido.`,
});
