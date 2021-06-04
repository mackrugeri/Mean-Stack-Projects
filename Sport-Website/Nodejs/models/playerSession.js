const mongoose = require('mongoose');

var PlayerSession = mongoose.model('PlayerSession',{
    Name:{type:String},
    Time:{type:String},
    game:{type:String},
    ranking:{type:String},
    prority:{type:String},
    
});
module.exports = { PlayerSession };