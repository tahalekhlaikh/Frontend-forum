const mongoose =require('mongoose')
var Schema = mongoose.Schema;

const userSchema = new Schema({
    _id:{type:mongoose.Types.ObjectId,required:true},
    username :{type : String ,required:true},
    email :{type : String ,required:true},
    password :{type : String ,required:true},
    
})


module.exports=mongoose.model('user',userSchema);