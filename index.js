const express = require("express");
const app = express();

app.get("/msg", (req, res, next) => {
  res.json({ message: "Hello, World!" });
});

app.listen(8081, () => {
  console.log("Server running on port 3000");
});
