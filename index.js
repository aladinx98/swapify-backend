const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const UserRoute = require("./src/router/Users");
const mongoose = require("mongoose");


require("./src/db/conn");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors(
  ({
    origin: 'https://swapfry01.netlify.app',
    credentials: true 
  })));
app.use("/users", UserRoute);
app.get("/", async (req, res) => {
  res.send(`server is run ${process.env.EMAIL}`)
  console.log("MongoDB URL:", process.env.MONGO_URL);
})
app.listen(process.env.PORT, () => {
  console.log(`Server is running at port ${process.env.PORT}`);
});
