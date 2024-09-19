const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI
const mongoURI = MONGO_URI
async function connectToMongo() {
    await mongoose.connect(mongoURI).then(() => console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}
module.exports = connectToMongo;