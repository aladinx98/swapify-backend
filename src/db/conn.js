const mongoose = require("mongoose");
require("dotenv").config();

console.log("MongoDB URL:", process.env.MONGO_URL);

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((err) => {
    console.log(err, "Database Connection Failed");
  });
