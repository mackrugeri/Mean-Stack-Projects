const mongoose = require('mongoose');

var PraticeSession = mongoose.model('PraticeSession',{
    Pname:{type:String},
    game:{type:String},
    pranking:{type:String},
    coach:{type:String},
    court:{type:String},
    Time:{type:String},
    Oname:{type:String},
    Oranking:{type:String},
});
module.exports = { PraticeSession };