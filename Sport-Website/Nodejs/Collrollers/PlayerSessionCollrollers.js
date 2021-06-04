const express = require('express');
var router = express.Router();
var ObjectId =require('mongoose').Types.ObjectId;

var { PlayerSession } = require('../models/playerSession');
router.get('/',(req,res)=>{
    PlayerSession.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving data: ' + JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{
    var Sign = new PlayerSession({
        Name:req.body.Name,
        Time:req.body.Time,
        game:req.body.game,
        ranking:req.body.ranking,
        prority:req.body.prority
        
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
    
    PlayerSession.findById(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2));}
    });
    
});


// update
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`); 

    var emp ={
        Name:req.body.Name,
        Time:req.body.Time,
        game:req.body.game,
        ranking:req.body.ranking,
        prority:req.body.prority
    }
    PlayerSession.findByIdAndUpdate(req.params.id, {$set:emp},{new:true},(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2));}
    });
});

router.delete('/:id,',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
        PlayerSession.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2));}
    });
});

module.exports=router;