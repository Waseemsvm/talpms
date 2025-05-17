const express = require("express");
const app = require("express")();
const cors = require("cors");
require("dotenv").config();
const studentRouter = require("./controller/student");
const PORT = process.env.PORT;

app.use(cors({}));

app.use(express.json());

/** Database connection */
import Database from "./database/initDB";
const db = Database.getInstance();
db.testConnection();

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger);

app.use("/student", studentRouter);

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

app.listen(PORT, (err) => {
  console.log("Server started on port ", PORT);
});
