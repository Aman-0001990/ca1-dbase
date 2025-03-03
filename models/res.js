
const mongoose =require('mongoose');

const uSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    last:{
        type:String,
    },
    City:{
        type:String,
        required:true,
    },
    Items:[{type : mongoose.Schema.Types.ObjectId,
        ref:'UserPizza'
    }]
})

const UsNew=mongoose.model('UsNew',uSchema);

module.exports=UsNew;