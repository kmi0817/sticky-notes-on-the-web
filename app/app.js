import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(morgan("dev"));
app.use(express.static("./public"));

export default app;