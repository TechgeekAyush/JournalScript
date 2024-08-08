const mongoose = require('mongoose');
const { Schema } = mongoose;
const noteSchema = new Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId, //acts as foreign key to store object id of a user (user id)
        ref : 'user' // referencing to another model
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
  });
const Notes = mongoose.model('notes',noteSchema);
module.exports = Notes