const router = require("express").Router();
const uploadFile = require("../controllers/uploadFile");

router.post("/", uploadFile);

module.exports = router;
