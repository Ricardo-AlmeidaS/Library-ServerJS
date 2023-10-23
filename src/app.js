import express from "express";
import connectNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectNaDatabase();

// Conexões feitas atraves do mongoose
conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso");
});

const app = express();
routes(app);

export default app;
