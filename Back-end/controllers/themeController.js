const theme = require('../models/theme')
const mongoose = require('mongoose');


module.exports = {
    addtheme: function(req,res){
        const id =mongoose.Types.ObjectId();
        let newTheme = new theme({
            _id:id,
            photo:"rien",
            titre:req.body.titre,
            description:req.body.description,
            forum : "5ff5fd74f54e744c947cd0f9"
        });
        newTheme.save(newTheme).then(result=>{
            if(result) {
                res.status(200).send({
                    message : "theme created",
                    createdTheme:result 
                })}
        })
    },
    getThemes : function(req,res){
        theme.find().then(results=>{
            res.send(results)
        })
    },
    getThemesByForum : function(req,res){
        theme.find({forum:req.params.idforum}).then(results=>{
            res.send(results)
        })
    },
    getThemeById : function (req,res) {
        theme.findOne({_id:req.params.idtheme}).then(results=>{
            res.send(results)
        })
    },
    deleteTheme : function(req,res){
        theme.findOneAndDelete({_id:req.params.idtheme}).then(results=>{
            res.send(results)
        })
    },

    modifytheme : function(req, res){
        theme.updateOne({_id:req.params.idtheme},req.body).then(results=>{
            res.send("updated !")
        })
    }
}