const express = require('express');
var router = express.Router();
var ObjectId =require('mongoose').Types.ObjectId;

var { PraticeSession } = require('../models/PraticeSession..js');

router.get('/',(req,res)=>{
    PraticeSession.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving data: ' + JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{
    var praticeSession = new PraticeSession({
        Pname:req.body.Pname,
        game: req.body.game,
        
        pranking:req.body.pranking,
        coach: req.body.coach,
        court: req.body.court,
        Time:req.body.Time,
        Oname : req.body.Oname,
        Oranking :req.body.Oranking
    });
    praticeSession.save((err,doc)=>{
        if(!err) {res.send(doc);}
        else{console.log('Error in Login save');}
    });
});


// select of bases of id
router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`); 
    
        PraticeSession.findById(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2));}
    });
    
});


// update
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`); 

    var emp ={
        Pname:req.body.Pname,
        game: req.body.game,
        pranking:req.body.pranking,
        coach: req.body.coach,
        court: req.body.court,
        Time:req.body.Time,
        Oname : req.body.Oname,
        Oranking :req.body.Oranking

    }
    PraticeSession.findByIdAndUpdate(req.params.id, {$set:emp},{new:true},(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2));}
    });
});

router.delete('/:id,',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
        PraticeSession.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2));}
    });
});

module.exports=router;