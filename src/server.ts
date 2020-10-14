import express from "express";
import 'express-async-errors';
import "./database/connection";
import routes from "./routes";
import path from 'path';
import errorHandler from "./errors/handler";

const app = express();

app.use(express.json());
app.use(routes);
app.use("/upload", express.static(path.join(__dirname, "..", "upload")));
app.use(errorHandler);
app.listen(3333);
