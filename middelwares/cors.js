import cors from "cors";
import { ACCEPTED_ORIGIN } from "../config.js";
export const corsMiddelware = ({ acceptedOrigins = ACCEPTED_ORIGIN } = {}) => {
  return cors({
    origin: (origin, callback) => {
      return callback(null, true);
    },
  });
};
