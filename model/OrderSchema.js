const mongooes = require('mongoose');
const OrderSchema = new mongooes.Schema({
    products:{
        type:Array,
        required:true,
    },
    total:{
        type:Number,
    },
    discount:{
        type:Number,
    },
    status:{
        type:String,//PENDING, CANCELLED, COMPLETED
        required:true,
    },
    customer:{
        type:Object, //{id,email,name}
        required:true,
    },
    trackingData:{
        type:Array,
        required:true,
    },
    placeDate:{
        type:Date,
        required:true,
    },
    shippedDate:{
        type:Date,
        required:true,
    },

});
module.exports=mongooes.model('order', OrderSchema);