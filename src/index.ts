import express from "express";
import cors from "cors";
import "dotenv/config";
import "reflect-metadata";
import { AppDataSource } from "./dataSource";
import tarefaRotas from "./routes/tasks";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("DataSource inicializado");

    app.use("/tarefas", tarefaRotas);

    app.get("/", (req, res) => {
      res.send("API To-Do rodando...");
    });

    app.listen(PORT, () => {
      console.log(`Servidor ouvindo na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao inicializar o DataSource", err);
  });
