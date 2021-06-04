const express = require('express');
var router = express.Router();
var ObjectId =require('mongoose').Types.ObjectId;

var { signUp } = require('../models/employees');

router.get('/',(req,res)=>{
    signUp.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving data: ' + JSON.stringify(err,undefined,2));}
    });
});

router.post('/',(req,res)=>{
    var Sign = new signUp({
        status:req.body.status,
        game: req.body.game,
        ranking:req.body.ranking,
        username: req.body.username,
        password: req.body.password,
        address:req.body.address
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
    
    signUp.findById(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2));}
    });
    
});


// update
router.put('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`); 

    var emp ={
        status : req.body.status,
        game: req.body.game,
        ranking:req.body.ranking,
        username: req.body.username,
        password: req.body.password,
        address:req.body.address
    }
    signUp.findByIdAndUpdate(req.params.id, {$set:emp},{new:true},(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2));}
    });
});

router.delete('/:id,',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
        signUp.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){ res.send(doc);}
        else {console.log('Error in Retriving Employee : ' + JSON.stringify(err,undefined,2));}
    });
});

module.exports=router;