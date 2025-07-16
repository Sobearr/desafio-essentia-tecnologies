import express from "express";
import cors from "cors";
import "dotenv/config";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import taskRoutes from "./routes/tasks";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("DataSource initialized");

    app.use("/tasks", taskRoutes);

    app.get("/", (req, res) => {
      res.send("To-do API is running...");
    });

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DataSource initialization error", err);
  });
