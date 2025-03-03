const mongoose =require('mongoose');

const uSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true,
    },
  
})


const UserPizza=mongoose.model('UserPizza',uSchema);

module.exports=UserPizza;