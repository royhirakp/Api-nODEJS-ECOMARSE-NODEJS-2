const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
const route = require("./routes/mainRoute");
app.use("/api/v1", route);
app.get("*", (req, res) => {
  res.status(404).json({ res: "404 not found!" });
});

module.exports = app;
