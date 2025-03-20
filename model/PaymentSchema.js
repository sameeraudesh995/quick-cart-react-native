const mongooes = require('mongoose');
const PaymentSchema = new mongooes.Schema({
    order:{
        type:Object,
        required:true,
        unique:true
    },
    amount:{
        type:Number,
        required:true,
    },
    tax:{
        type:Number,
        required:true,
    },
    discount:{
        type:Number,
        required:true,
    },
    extraCharges:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    transactionDetails:{
        type:Object,
        required:true,
    }

});
module.exports=mongooes.model('payment', PaymentSchema);