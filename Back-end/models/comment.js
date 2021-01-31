const mongoose =require('mongoose')
var Schema = mongoose.Schema;
const commentaireSchema = new Schema({
    _id:{type:mongoose.Types.ObjectId,required:true},
    pseud :{type : String ,required:true},
    message :{type : String ,required:true},
    datecreation :{type : Date ,required:true,default:Date.now()},
    user :{type : Schema.Types.ObjectId,ref:"user" ,required:true},
    post :{type : Schema.Types.ObjectId,ref:"post" ,required:true},
})

module.exports=mongoose.model('comment',commentaireSchema);