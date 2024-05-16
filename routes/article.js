const express = require("express");
const router = express.Router();

const article = require("../models/article.js");

const multer = require("multer");
let filename = "";
const diskStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "Uploads");
  },
  filename: function (req, file, callback) {
    const ext = file.mimetype.split("/")[1];
    const fileName = `user-${Date.now()}.${ext}`;
    filename = fileName;
    callback(null, fileName);
  },
});
const upload = multer({ storage: diskStorage });

router.post("/add", upload.any("image"), async (req, res) => {
  let newArticle = new article(req.body);

  newArticle.date = new Date();
  newArticle.image = filename;
  // newArticle.tags = req.body.tags.split(",");
  await newArticle
    .save()
    .then((saved) => {
      filename = "";
      res.status(200).send(saved);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});
router.get("/all", (req, res) => {
  article
    .find({})
    .then((article) => {
      res.status(200).send(article);
    })
    .catch((err) => res.status(400).send(err));
});
router.get("/getbyid/:id", (req, res) => {
  let id = req.params.id;
  article
    .findOne({ _id: id })
    .then((article) => {
      res.status(200).send(article);
    })
    .catch((err) => res.status(400).send(err));
});
router.get("/getbuidauthor/:id", (req, res) => {
  let id = req.params.id;
  article
    .find({ idAuthor: id })
    .then((article) => {
      res.status(200).send(article);
    })
    .catch((err) => res.status(400).send(err));
});
router.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  article
  .findByIdAndDelete({ _id: id })
  .then(() => {
    res.status(200).send("DONE");
  })
  .catch((err) => res.status(400).send(err));
});

router.patch("/update/:id", upload.any("/image"), (req, res) => {
  let id = req.params.id;
  let data = req.body;
  // data.tags = req.body.tags.split(",");
  if (filename.length > 0) {
    data.image = filename;
  }

  article
    .findByIdAndUpdate({ _id: id }, data)
    .then((article) => {
      filename=""
      res.status(200).send("DONE");
    })
    .catch((err) => res.status(400).send(err));
});
module.exports = router;
