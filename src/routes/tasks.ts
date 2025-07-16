import { Router } from "express";
import { AppDataSource } from "../dataSource";
import { Task } from "../entities/task";

const router = Router();
const tarefaRepo = AppDataSource.getRepository(Task);

router.get("/", async (_, res) => {
  const tarefas = await tarefaRepo.find();
  res.send(tarefas);
});

export default router;
