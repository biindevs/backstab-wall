const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 8001;
const morgan = require("morgan");
const connectDb = require("./config/dbConnection");
const cors = require("cors");

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/messages", require("./routes/messagesRoute"));

connectDb()
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on Port: ${port}`);
        });
    })
    .catch((err) => console.log(err));
