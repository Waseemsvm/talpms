const studentRouter = require("express").Router();

studentRouter.get("/", (req, res) => {
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


// app.get("/", (req, res) => {
//   console.log("Triggered / Get request");
//   res.send("Hello World");
// });

// app.post("/create_student", async (req, res) => {
//   const conn = db.getConnection()("student");
//   const result = await conn
//     .insert({
//       id: "student01",
//       first_name: "waseem",
//     })
//     .returning("id");
//   res.send(result);
// });

// app.post("/delete_student", async (req, res) => {
//   console.log(req)
//   // const conn = db.getConnection()("student");
//   // conn.where("id", )
// });

module.exports = studentRouter;
