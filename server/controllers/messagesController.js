const Messages = require("../Model/messagesModel");

const getMessages = async (req, res) => {
    const messages = await Messages.find();

    res.status(200).json(messages);
};

const createMessage = async (req, res) => {
    const { title, message } = req.body;
    const newMessage = await Messages.create({
        title,
        message,
    });

    res.status(201).json(newMessage);
};

module.exports = { getMessages, createMessage };
