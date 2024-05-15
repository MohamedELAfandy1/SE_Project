const express = require("express");
const app = express();

app.use(express.json());
const articleRoute = require("./routes/article.js");
const authorRoute = require('./routes/author.js');

var cors = require('cors')
app.use(cors())

require('dotenv').config()
require("./config/connectToDB.js");


app.use("/article", articleRoute);
app.use("/author", authorRoute);
app.use("/getimage", express.static("./uploads"));

app.listen(process.env.PORT, () => {
  console.log("Server Connected On Port ",process.env.PORT);
});
