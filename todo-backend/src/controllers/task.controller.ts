import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Task } from "../entities/task";

const taskRepo = AppDataSource.getRepository(Task);

export const getAllTasks = async (_: Request, res: Response) => {
  try {
    const tasks = await taskRepo.find();
    res.status(200).json(tasks);
  } catch (err) {
    console.error("Error fetching tasks:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ message: "Title is required" });

    const task = taskRepo.create({ title });
    await taskRepo.save(task);
    res.status(201).json(task);
  } catch (err) {
    console.error("Create Task Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, complete } = req.body;

    const task = await taskRepo.findOneBy({ id: Number(id) });
    if (!task) return res.status(400).json({ message: "Task not found" });

    task.title = title ?? task.title;
    task.complete = complete ?? task.complete;
    await taskRepo.save(task);

    res.json(task);
  } catch (err) {
    console.error("Error updating task:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await taskRepo.delete(id);
    if (result.affected === 0) {
      return res.status(400).json({ message: "Task not found" });
    }

    res.status(204).send();
  } catch (err) {
    console.error("Error deleting task:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};
