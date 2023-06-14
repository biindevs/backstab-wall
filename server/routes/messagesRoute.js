const express = require("express");
const router = express.Router();

const {
    getMessages,
    createMessage,
} = require("../controllers/messagesController");

router.route("/").get(getMessages).post(createMessage);

router.delete("/:id", (req, res) => {
    res.status(200).json({ message: "Message deleted successfully" });
});

module.exports = router;
