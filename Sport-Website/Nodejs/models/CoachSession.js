const mongoose = require('mongoose');

var ranking = mongoose.model('CoachRanking',{
    Playername:{type:String},
    TimeDuration:{type:String},
    Game:{type:String},
    ranking:{type:String},
});
module.exports = { ranking };