const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
const route = require("./routes/mainRoute");
app.get("/api/v1/ppp", (req, res) => {
  res.json({ wor: "working" });
});
app.use("/api/v1", route);
app.get("/", (req, res) => {
  res.send("Hello Worlddddddddd!");
});
app.get("/h", (req, res) => {
  res.send("Hello Worlddddddddd!22222222222");
});
app.get("*", (req, res) => {
  res.status(404).json({ res: "404 not found!" });
});

module.exports = app;
