const express = require("express");
const router = express.Router();

const {
    getMessages,
    createMessage,
} = require("../controllers/messagesController");

router.route("/").get(getMessages).post(createMessage);

module.exports = router;
