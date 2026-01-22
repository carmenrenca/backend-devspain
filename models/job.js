import { DEFAULTS } from "../config.js";
import jobs from "../jobs.json" with { type: "json" };

export class JobModel {
  static async getAll({
    title,
    text,
    technology,
    offset = DEFAULTS.LIMIT_OFFSET,
    level,
    limit = 10,
  }) {
    let filteredJobs = jobs;

    if (text) {
      const searchTerm = text.toLowerCase();
      filteredJobs = filteredJobs.filter(
        (job) =>
          job.titulo.toLowerCase().includes(searchTerm) ||
          job.descripcion.toLowerCase().includes(searchTerm),
      );
    }

    if (technology) {
      filteredJobs = filteredJobs.filter((job) =>
        job.data.technologys.includes(technology),
      );
    }

    const limitNum = Number(limit);
    const offestNum = Number(offset);
    const paginateJobs = filteredJobs.slice(offestNum, offestNum + limitNum);
    return paginateJobs;
  }
  static async getById(id) {
    const job = jobs.find((item) => item.id === id);

    return job;
  }
  static async create({ titulo, empresa, ubicacion, data }) {
    const newJob = {
      id: crypto.randomUUID(),
      titulo,
      empresa,
      ubicacion,
      data,
    };
    jobs.push(newJob);
    return newJob;
  }
}
