const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected: ${response.connection.host}`);
        return response;
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = connectDb;
