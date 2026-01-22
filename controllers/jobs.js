import { JobModel } from "../models/job.js";

export class JobController {
  static async getAll(req, res) {
    const {
      title,
      text,
      technology,
      offset = DEFAULTS.LIMIT_OFFSET,
      level,
      limit = 10,
    } = req;
    const paginateJobs = await JobModel.getAll({
      title,
      text,
      technology,
      offset,
      level,
      limit,
    });
    return res.json(paginateJobs);
  }
  static async getById(req, res) {
    const { id } = req.params;
    const job = await JobModel.getById(id);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    return res.json(job);
  }
  static async create(req, res) {
    const { titulo, empresa, ubicacion, data } = req.body;
    const newJob = await JobModel.create({ titulo, empresa, ubicacion, data });
    return res.status(201).json(newJob);
  }
  static async update(req, res) {
    //TODO
  }
  static async delete(req, res) {
    //TODO
  }
}
