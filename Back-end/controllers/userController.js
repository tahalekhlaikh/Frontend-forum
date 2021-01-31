const user = require('../models/user')
const mongoose = require('mongoose');
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");


module.exports = {
 
    login: function(req, res){
        const userData = {
          email: req.body.email,
          password: req.body.password
        };
        user.findOne({email:userData.email}, (err, results) => {
          if (err) {
            console.log(err);
          }
          if (!results) {
            return res.json({
              success: 0,
              data: "Invalid email or passwordo"
            });
          }
          const result = (userData.password==results.password);
          if (result) {
            results.password = undefined;
            const jsontoken = sign({ result: results }, "qwe1234", {
              expiresIn: "1h"
            });
            return res.json({
              success: 1,
              message: "login successfully",
              token: jsontoken
            });
          } else {
            return res.json({
              success: 0,
              data: "Invalid email or password"
            });
          }
        });
      },
    addUser: function(req,res){
        const id =mongoose.Types.ObjectId();
        let newUser = new user({
            _id:id,
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        });
        newUser.save(newUser).then(result=>{
            if(result) {
                res.status(200).send({
                    message : "user created",
                    createdUser:result 
                })}
        })
    },
    getUser : function(req,res){
        user.find().then(results=>{
            res.send(results)
        })
    },
    getUserById : function (req,res) {
        user.findOne({_id:req.params.iduser}).then(results=>{
            res.send(results)
        })
    },
    deleteUser : function(req,res){
        user.findOneAndDelete({_id:req.params.iduser}).then(results=>{
            res.send(results)
        })
    },

    modifyUser : function(req, res){
        user.updateOne({_id:req.params.iduser},req.body).then(results=>{
            res.send("updated !")
        })
    }
}

