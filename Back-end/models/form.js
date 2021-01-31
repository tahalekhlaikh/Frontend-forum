const mongoose =require('mongoose')
var Schema = mongoose.Schema;
const formSchema = new Schema({
    _id:{type:mongoose.Types.ObjectId,required:true},
    titre :{type : String ,required:true},
})

module.exports=mongoose.model('form',formSchema);