const mongoose = require("mongoose");

const messagesSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please add a title"],
        },
        message: {
            type: String,
            required: [true, "Please add a message"],
        },
        date: {
            type: String,
            required: [true, "Please add a date"],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Messages", messagesSchema);
