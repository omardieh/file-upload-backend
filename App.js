const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const uploadsRoute = require("./src/routes/uploads.route");

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileupload());
app.use(express.static("public"));
app.use("/api/uploads", uploadsRoute);

module.exports = app;
