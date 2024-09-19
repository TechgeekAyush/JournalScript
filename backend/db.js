const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const mongoURI = `mongodb+srv://ayushun2003:${MONGO_PASSWORD}@journalscript.nos0m.mongodb.net/?retryWrites=true&w=majority&appName=JournalScript`
async function connectToMongo() {
    await mongoose.connect(mongoURI).then(() => console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}
module.exports = connectToMongo;