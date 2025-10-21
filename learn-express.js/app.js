const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
// app.use("/check", (req, res) => {
//   res.send(
//     "<html><form action='/checked' method='POST'><input type='text' name='something'><button type='submit'>Send</button></input> </form></html>"
//   );
// });
// app.use("/checked", (req, res) => {
//   console.log(req.body.something);
//   res.redirect("/check");
// });
app.use("/", (req, res) => {
  res.send("<h2>you are on home!</h2>");
});

app.listen(3000);
