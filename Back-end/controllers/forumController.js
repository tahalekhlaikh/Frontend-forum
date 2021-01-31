const forum = require('../models/form')
const mongoose = require('mongoose');


module.exports = {
    addForum: function(req,res){
        const id =mongoose.Types.ObjectId();
        let newForum = new forum({
            _id:id,
            titre:req.body.titre
        });
        newForum.save(newForum).then(result=>{
            if(result) {
                res.status(200).send({
                    message : "forum created",
                    createdForum:result 
                })}
        })
    },
    getForum: function(req,res){
        forum.find().then(results=>{
            res.send(results)
        })
    },
    getForumById : function (req,res) {
        forum.findOne({_id:req.params.idforum}).then(results=>{
            res.send(results)
        })
    },
    deleteForum : function(req,res){
        forum.findOneAndDelete({_id:req.params.idforum}).then(results=>{
            res.send(results)
        })
    },

    modifyForum : function(req, res){
        forum.updateOne({_id:req.params.idforum},req.body).then(results=>{
            res.send("updated !")
        })
    }
}

