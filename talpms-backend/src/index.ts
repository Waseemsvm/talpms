const express = require("express");
const app = require("express")();
require("dotenv").config();

app.use(express.json());

/** Database connection */
import Database from "./database/initDB";
const db = Database.getInstance();
db.testConnection();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  console.log("Triggered / Get request");
  res.send("Hello World");
});

app.post("/create_student", async (req, res) => {
  const conn = db.getConnection()("student");
  const result = await conn
    .insert({
      id: "student01",
      first_name: "waseem",
    })
    .returning("id");
  res.send(result);
});

app.post("/delete_student", async (req, res) => {
  console.log(req)
  // const conn = db.getConnection()("student");
  // conn.where("id", )
});

app.listen(PORT, (err) => {
  console.log("Server started on port ", PORT);
});
