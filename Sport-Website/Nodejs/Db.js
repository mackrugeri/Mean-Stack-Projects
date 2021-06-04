const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/SportWebsite',(err)=>{

    if(!err)
        console.log("MonogoDB connection succeeded");
    else    
        console.log('Error in DB connection: ' + JSON.stringify(err,undefined,2));

});

module.exports = mongoose;