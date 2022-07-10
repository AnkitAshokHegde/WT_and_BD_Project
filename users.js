const mongoose = require('mongoose');

const userdataSchema = new mongoose.Schema({  
    fullName: String,
    PhoneNumber: String,
    password:String,
    age: Number,
    EmailAddress: String,   
    
});

module.exports = mongoose.model('users',userdataSchema);