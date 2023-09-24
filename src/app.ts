import express, { Express } from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app: Express = express();

app.use(morgan("dev"));
app.use(express.static("./src/public"));

export default app;