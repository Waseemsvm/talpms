var app = require("express")();
require("dotenv").config();
var PORT = process.env.PORT;
app.get("/", function (req, res) {
    console.log("Triggered / Get request");
    res.send("Hello World");
});
app.listen(PORT, function (err) {
    console.log("Server started on port ", PORT);
});
