const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true //boolean, whether to define a unique index on this property.
    },
    password : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
  });
const User = mongoose.model('user',userSchema);
module.exports = User;