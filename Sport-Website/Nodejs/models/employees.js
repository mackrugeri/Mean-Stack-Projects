const mongoose = require('mongoose');

var signUp = mongoose.model('SignUp',{
    // status:{type:String},
    game:{type:String},
    ranking:{type:String},
    username:{type:String},
    password:{type:String},
    address:{type:String}
});
module.exports = { signUp };