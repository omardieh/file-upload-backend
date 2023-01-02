const router = require("express").Router();

router.post("/", (req, res) => {
  res.send("post request was received");
});

module.exports = router;
