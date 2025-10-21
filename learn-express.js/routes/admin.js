const express = require("express");
const path = require("path");
const router = express.Router();
console.log("im in admin.js");

router.use("/admin/check", (req, res) => {
  console.log(path.join(__dirname, "../", "/views/add-product.html"));
  console.log("im in /check admin.js");
  res.sendFile(path.join(__dirname, "../", "/views/add-product.html"));
});

router.post("/checked", (req, res) => {
  console.log(req.body.something);
  res.redirect("/admin/check");
});

module.exports = router;
