import cors from "cors";
import { ACCEPTED_ORIGIN } from "../config.js";
export const corsMiddelware = ({ acceptedOrigins = ACCEPTED_ORIGIN } = {}) => {
  return cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
  });
};
