const mongooes = require('mongoose');
const ReturnSchema = new mongooes.Schema({
    order:{
        type:Object,
        required:true,
    },
    reason:{
        type:String,
        required:true,
    },
    status:{
        type:String,//PENDING, REJECTED, REFUND
        required:true,
    },
    returnProcess:{ // process Date
        type:Array,

    },
    requestedDate:{
        type:Date,
    },
    completedData:{
        type:String,// Refund , new Product
    },
});
module.exports=mongooes.model('return', ReturnSchema);