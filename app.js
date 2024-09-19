import cors from "cors";
import express from "express";
import { router } from "./routes/goalsRouter.js";

export const app = express();

app.use(cors());
app.use(express.json());

app.use('/goals/v1/', router)
