import { Router } from "express";
import { JobController } from "../controllers/jobs.js";

const jobsRouter = Router();

jobsRouter.get("/", JobController.getAll);
jobsRouter.post("/", JobController.create);
jobsRouter.get("/:id", JobController.getById);
jobsRouter.delete("/:id", JobController.delete);
jobsRouter.put("/:id", JobController.update);

export default jobsRouter;
