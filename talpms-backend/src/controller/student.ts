import Database from "../database/initDB";
import GUIDGenerator from "../utility/GUIDGenerator";

const studentRouter = require("express").Router();

studentRouter.get("/", async (req, res) => {
  console.log("Get students");
  const db = Database.getInstance().getConnection();
  const students = await db.select("*").table("student");
  res.json(students);
});

studentRouter.post("/register", async (req, res) => {
  try {
    const db = Database.getInstance().getConnection();
    const id = `STU-${new GUIDGenerator()
      .generate()
      .slice(0, 8)}`.toUpperCase();
    const student = req.body;
    const r = await db.insert({ ...student, id: id }).table("student");
    res.send(200);
  } catch (ex) {
    res.send(500).end();
  }
});

studentRouter.post("/", (req, res) => {
  console.log("Get students");
});

studentRouter.get("/:id", (req, res) => {
  console.log("Getting single student");
});

studentRouter.post("/create", (req, res) => {
  console.log("Creating student");
});

studentRouter.delete("/:id", (req, res) => {
  console.log("deleting student");
});

studentRouter.post("/activate", async (req, res) => {
  try {
    const db = Database.getInstance().getConnection();
    await db("student").where("id", req.body.id).update({
      is_active: 1,
    });
    res.send(200);
  } catch (ex) {
    res.send(500).end();
  }
});

studentRouter.post("/deactivate", async (req, res) => {
  try {
    const db = Database.getInstance().getConnection();
    await db("student").where("id", req.body.id).update({
      is_active: 0,
    });
    res.send(200);
  } catch (ex) {
    res.send(500).end();
  }
});

module.exports = studentRouter;
