const express = require("express");
const app = express();

app.use("/check", (req, res) => {
  res.send("<h2>you are on check!</h2>");
});
app.use("/", (req, res) => {
  res.send("<h2>you are on home!</h2>");
});

app.listen(3000);
