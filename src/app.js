import express from "express";
import connectNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandling from "./middlewares/errorHandling.js";
import Handler404 from "./middlewares/Handle404.js";

const conexao = await connectNaDatabase();

// Conexões feitas atraves do mongoose
conexao.on("error", (erro) => {
  console.error("connection error", erro);
});

conexao.once("open", () => {
  console.log("database connection successful");
});

const app = express();
app.use(express.json());
routes(app);

app.use(Handler404);

// eslint-disable-next-line no-unused-vars
app.use(errorHandling);

export default app;
