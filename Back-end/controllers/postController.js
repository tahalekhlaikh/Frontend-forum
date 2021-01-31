const post = require('../models/post')
const mongoose = require('mongoose');


module.exports = {
    addPost: function(req,res){
        const id =mongoose.Types.ObjectId();
        let newPost = new post({
            _id:id,
            photo:"rien",
            titre:req.body.titre,
            message:req.body.message,
            user:"5ff9e6df2e40dd49bc326e75",
            theme:req.body.theme
        });
        newPost.save(newPost).then(result=>{
            if(result) {
                res.status(200).send({
                    message : "post created",
                    createdPost:result 
                })}
        })
    },
    getPostByTheme: function(req,res){
        post.find({theme:req.params.idtheme}).then(results=>{
            res.send(results)
        })
    },
    getPostByUser: function(req,res){
        post.find({user:req.params.iduser}).then(results=>{
            res.send(results)
        })
    },
    getPostById : function (req,res) {
        post.findOne({idpost:req.body.idpost}).then(results=>{
            res.send(results)
        })
    },
    getPost : function (req,res) {
        post.find().then(results=>{
            res.send(results)
        })
    },
    deletePost : function(req,res){
        post.findOneAndDelete({_id:req.params.idpost}).then(results=>{
            res.send(results)
        })
    },

    modifyPost : function(req, res){
        post.updateOne({_id:req.params.idpost},req.body).then(results=>{
            res.send("updated !")
        })
    }
}

