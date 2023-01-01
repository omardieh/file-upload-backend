const router = require("express").Router();

router.post("/", (req, res) => {
  res.send("post to uploads route");
});

module.exports = router;
