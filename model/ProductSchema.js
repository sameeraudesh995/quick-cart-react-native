const mongooes = require('mongoose');
const ProductSchema = new mongooes.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,

    },
    displayPrice:{
        type:Number,
    },
    actualPrice:{
        type:Number,
    },
    dealData:{
        type:Object,
        required:true,
    },
    images:{
        type:Object
    },
    qty:{
        type:Number,
        required: true,
    },
    brand:{
        type:String,
        required: true,
    }
});
module.exports=mongooes.model('product', ProductSchema);