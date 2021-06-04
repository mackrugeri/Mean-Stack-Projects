const mongoose = require('mongoose');

var MatchSession = mongoose.model('MatchSession',{
    Pname:{type:String},
    game:{type:String},
    pranking:{type:String},
    coach:{type:String},
    court:{type:String},
    Time:{type:String},
    Oname:{type:String},
    Oranking:{type:String},
});
module.exports = { MatchSession };