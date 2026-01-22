import express from "express";
import { DEFAULTS } from "./config.js";
import { corsMiddelware } from "./middelwares/cors.js";
import jobsRouter from "./routes/jobs.js";

const PORT = process.env.PORT ?? DEFAULTS.PORT;
const app = express();

app.use(corsMiddelware());
app.use(express.json());
app.use("/jobs", jobsRouter);

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
