const app = require("express")();
require("dotenv").config();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
    console.log("Triggered / Get request");
    res.send("Hello World");
});


app.listen(PORT, (err) => {
    console.log("Server started on port ", PORT);
})