const express = require("express");
const uploadsRoute = require("./src/routes/uploads.route");

const app = express();
app.use(express.json());

// #
// use the express.static("public") in here

app.use("/api/uploads", uploadsRoute);

module.exports = app;
