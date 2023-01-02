const path = require("path");

module.exports = (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  let { file } = req.files;
  const uploadsPath = `${path.resolve(".")}/public/uploads/${file.name}`;
  file.mv(uploadsPath, function (err) {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send("File uploaded!" + file.name);
    }
  });
};
