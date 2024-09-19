const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = "mongodb://localhost:27017/JournalScript"
async function connectToMongo() {
    await mongoose.connect(mongoURI).then(() => console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}
module.exports = connectToMongo;