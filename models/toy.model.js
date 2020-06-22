const mongoose = require('mongoose');


var toySchema = new mongoose.Schema({
    name:{
        type:String,
        
    },
    price:{
        type:String
    },
    amount:{
        type:String
    },
    description:{
        type:String
    }
})


mongoose.model('Toy',toySchema);