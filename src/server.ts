import express from "express";
import "./database/connection";
import routes from "./routes";
import path from 'path';

const app = express();

app.use(express.json());
app.use(routes);
app.use("/upload", express.static(path.join(__dirname, "..", "upload")));

app.listen(3333);
