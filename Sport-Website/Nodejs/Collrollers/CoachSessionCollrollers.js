const express = require('express');
var router = express.Router();
var ObjectId =require('mongoose').Types.ObjectId;

var { ranking } = require('../models/CoachSession');

router.get('/',(req,res)=>{
    ranking.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving data: ' + JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{
    var Sign = new ranking({
        Playername:req.body.Playername,
        TimeDuration: req.body.TimeDuration,
        Game:req.body.Game,
        ranking: req.body.ranking,
    });
    Sign.save((err,doc)=>{
        if(!err) {res.send(doc);}
        else{console.log('Error in Login save');}
    });
});


// select of bases of id
router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`); 
    
        ranking.findById(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2));}
    });
    
});


// update
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`); 

    var emp ={
        Playername:req.body.Playername,
        TimeDuration: req.body.TimeDuration,
        game:req.body.game,
        ranking: req.body.ranking,
    }
    ranking.findByIdAndUpdate(req.params.id, {$set:emp},{new:true},(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2));}
    });
});

router.delete('/:id,',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
        ranking.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2));}
    });
});

module.exports=router;