const express = require("express");

const router = express.Router();
const Author = require("../models/author.js");
const multer = require("multer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

router.post("/register", upload.any("image"), (req, res) => {
  const author = new Author(req.body);
  author.image = filename;
  salt = bcrypt.genSaltSync(10);
  author.password = bcrypt.hashSync(req.body.password, salt);
  author
    .save()
    .then((savedAuthor) => {
      filename = "";
      res.status(200).send(savedAuthor);
    })
    .catch((err) => res.send(err));
});
router.post("/login", (req, res) => {
  let data = req.body;
  Author.findOne({ email: data.email })
    .then((author) => {
      let valid = bcrypt.compareSync(data.password, author.password);
      if (!valid) {
        res.send("Invalid Email Or Password");
      } else {
        let payload = {
          _id: author._id,
          email: author.email,
          fullName: author.firstname + " " + author.lastname,
        };
        let token = jwt.sign(payload, "123456789");
        res.send({ myToken: token });
      }
    })
    .catch((err) => res.send(err));
});
router.get("/all", (req, res) => {
  Author.find({}, { password: false })
    .then((author) => {
      res.status(200).send(author);
    })
    .catch((err) => res.status(400).send(err));
});
router.get("/getbyid/:id", (req, res) => {
  let id = req.params.id;
  Author.findOne({ _id: id })
    .then((author) => {
      res.status(200).send(author);
    })
    .catch((err) => res.status(400).send(err));
});
router.delete("/delete/:id", (req, res) => {
  let id = req.params.id;
  Author.findByIdAndDelete({ _id: id })
    .then(() => {
      res.status(200).send("DONE");
    })
    .catch((err) => res.status(400).send(err));
});
router.patch("/update/:id", upload.any("/image"), (req, res) => {
  let id = req.params.id;
  let data = req.body;
  let password = "";
  if(req.body.password!==undefined){
    salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(req.body.password, salt);
  }
  if (filename.length > 0) {
    data.image = filename;
  }

  req.body.password=password
  Author
    .findByIdAndUpdate({ _id: id }, data)
    .then(() => {
      filename = "";
      res.status(200).send("DONE");
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
