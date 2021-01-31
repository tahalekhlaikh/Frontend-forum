const comment = require('../models/comment')
const mongoose = require('mongoose');


module.exports = {
    addCmment: function(req,res){
        const id =mongoose.Types.ObjectId();
        let newComent = new comment({
            _id:id,
            pseud:req.body.pseud,
            message:req.body.message,
            user:"5ff9e6df2e40dd49bc326e75",
            post:req.body.post
        });
        newComent.save(newComent).then(result=>{
            if(result) {
                res.status(200).send({
                    message : "comment created",
                    createdComent:result 
                })}
        })
    },
    getCommentByPost: function(req,res){
        comment.find({post:req.params.idpost}).then(results=>{
            res.send(results)
        })
    },
    getCommentByUser: function(req,res){
        comment.find({user:req.params.iduser}).then(results=>{
            res.send(results)
        })
    },
    getcommentById : function (req,res) {
        comment.findOne({_id:req.params.idcomment}).then(results=>{
            res.send(results)
        })
    },
    getComment : function (req,res) {
        comment.find().then(results=>{
            res.send(results)
        })
    },
    deleteComment : function(req,res){
        comment.findOneAndDelete({_id:req.params.idcomment}).then(results=>{
            res.send(results)
        })
    },

    modifyComment : function(req, res){
        comment.updateOne({_id:req.params.idcomment},req.body).then(results=>{
            res.send("updated !")
        })
    }
}