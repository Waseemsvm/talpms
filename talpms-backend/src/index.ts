const express = require("express");
const app = require("express")();
require("dotenv").config();
const studentRouter = require("./controller/student");


app.use(express.json());

/** Database connection */
import Database from "./database/initDB";
const db = Database.getInstance();
db.testConnection();

const PORT = process.env.PORT;

app.use("/student", studentRouter);

app.listen(PORT, (err) => {
  console.log("Server started on port ", PORT);
});
