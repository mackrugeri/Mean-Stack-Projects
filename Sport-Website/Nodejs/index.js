const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { mongoose } = require('./Db.js');


var employeeController = require('./Collrollers/employeeConllrollers.js');
var PraticeSession = require('./Collrollers/PraticeSessionCollrollers.js');
var PraticeSession = require('./Collrollers/MatchSessionCollrollers.js');
var CoachSession = require('./Collrollers/CoachSessionCollrollers');
var PlayerSession = require('./Collrollers/PlayerSessionCollrollers');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000,()=>console.log("Server started at port:3000"));


app.use('/empolyees',employeeController);
app.use('/PraticeSession',PraticeSession);
app.use('/MatchSession',PraticeSession);
app.use('/CoachSession',CoachSession);
app.use('/PlayerSession',PlayerSession);