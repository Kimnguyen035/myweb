require('dotenv').config();
const mongoose = require('mongoose');

const conectDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connection SUCCESS");
    } catch (err) {
        console.log('MongoDB connection FAILED ', err);
        process.exit(1);
    }
}

module.exports = {
    conectDB
}