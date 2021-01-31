const mongoose =require('mongoose')
var Schema = mongoose.Schema;
const postSchema = new Schema({
    _id:{type:mongoose.Types.ObjectId,required:true},
    photo :{type : String ,required:true},
    titre :{type : String ,required:true},
    message :{type : String ,required:true},
    datecreation :{type : Date ,required:true,default:Date.now()},
    nombrevue :{type : Number },
    nombrecomment :{type : Number },
    user :{type : mongoose.Types.ObjectId,ref:"user" ,required:true},
    theme :{type : mongoose.Types.ObjectId,ref:"theme" ,required:true}
})

module.exports=mongoose.model('post',postSchema);