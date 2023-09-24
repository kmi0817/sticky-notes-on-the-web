import express, { Express } from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

import apiRouter from "@routes/apiRouter";

const app: Express = express();

console.log(process.cwd());

app.use(morgan("dev"));
app.use(express.static("./src/public"));

app.use("/", apiRouter);

export default app;