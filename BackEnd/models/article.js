const mongoose = require("mongoose");
const article = mongoose.model('article',{
  title: {
    type: String,
    required: true
  },
  idAuthor: {
    type: String,
    required: true
  },
  descreption: {
    type: String,
  },
  date: {
    type: String,
  },
  content: {
    type: String,
  },
  image: {
    type: String,
  },
  tags: {
    type: Array,
  },
});

module.exports = article;
