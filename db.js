// code to connect express application with mongodb
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://mongo:27017/productsDB', 
        {useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log("MongoDB Connected")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1);
    } 
}

module.exports = connectDB;