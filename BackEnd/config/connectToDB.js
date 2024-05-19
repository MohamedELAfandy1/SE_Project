const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected Sucessfully");
  })
  .catch((err) => {
    console.log(err);
  });

  module.exports = mongoose;