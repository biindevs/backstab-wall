const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

const connectDb = require("./config/dbConnection");
const port = process.env.PORT || 8001;

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/messages", require("./routes/messagesRoute"));

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on Port: ${port}`);
    });
  })
  .catch((err) => console.log(err));
