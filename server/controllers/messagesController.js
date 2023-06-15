const Messages = require("../models/messagesModel");

const getMessages = async (req, res) => {
    try {
        const messages = await Messages.find();

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

const createMessage = async (req, res) => {
    try {
        const { title, message } = req.body;
        const newMessage = await Messages.create({
            title,
            message,
            date,
        });

        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

module.exports = { getMessages, createMessage };
