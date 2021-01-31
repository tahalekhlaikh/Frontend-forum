const mongoose =require('mongoose')
var Schema = mongoose.Schema;
const themeSchema = new Schema({
    _id:{type:mongoose.Types.ObjectId,required:true},
    photo :{type : String ,required:true},
    titre :{type : String ,required:true},
    description:{type : String ,required:true},
    forum :{type : Schema.Types.ObjectId,ref:"form" ,required:true}
})

module.exports=mongoose.model('theme',themeSchema);