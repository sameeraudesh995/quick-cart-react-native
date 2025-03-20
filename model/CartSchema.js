const mongooes = require('mongoose');
const CartSchema = new mongooes.Schema({
    user:{
        type:Object,
        required:true,

    },
    product:{
        type:Object,//name,id
        required:true,
    },

    date:{
        type:Date,
        required:true,
    },
    qty:{
        type:Number,
        required:true,
    }

});
module.exports=mongooes.model('cart', CartSchema);