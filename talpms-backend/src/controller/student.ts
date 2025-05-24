import Database from "../database/initDB";
import GUIDGenerator from "../utility/GUIDGenerator";

const studentRouter = require("express").Router();

studentRouter.get("/", async (req, res) => {
  const id = req.query.id;
  const db = Database.getInstance().getConnection();
  let students;
  if (id) {
    console.log(`Fetching Student with id ${id}`);
    // students = await db("student").select("*").where("id", id);
    [students] = await db.raw(`select * from student where id = '${id}'`)
  } else {
    console.log(`Fetching Students`);
    // students = await db.select("*").table("student");
    [students] = await db.raw(`select * from student`);
  }

  res.json(students);
});

studentRouter.get("/search", async (req, res) => {
  const db = Database.getInstance().getConnection();
  const value = req.query.value;

  try {
    let students;
    if (value) {
      [students] = await db.raw(`select * from student where first_name like '%${value}%' or last_name like '%${value}%'`)
    } else {
      [students]  = await db.raw(`select * from student`);
    }

    res.json(students).end();
  } catch (ex) {
    console.log(ex);
    res.send(500);
  } finally {
    res.end();
  }
});

studentRouter.post("/register", async (req, res) => {
  try {
    const db = Database.getInstance().getConnection();
    const id = `STU-${new GUIDGenerator()
      .generate()
      .slice(0, 8)}`.toUpperCase();
    const student = req.body;
    const r = await db.insert({ ...student, id: id }).table("student");
    res.json({ id: id });
  } catch (ex) {
    res.send(500).end();
  }
});

studentRouter.delete("/", async (req, res) => {
  console.log(req.query.id);
  const db = Database.getInstance().getConnection();
  const r = await db("student").where("id", req.query.id).delete();
  if(!r) res.sendStatus(404);
  res.sendStatus(200);
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
