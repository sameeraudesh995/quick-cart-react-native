const mongooes = require('mongoose');
const RefundSchema = new mongooes.Schema({
    order:{
        type:Object,
        required:true,
    },
     returnData:{
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
    refundProcess:{ // process Date
        type:Array,

    },
    requestedDate:{
        type:Date,
    },
    refundedAmount:{
        type:Number,
    },


});
module.exports=mongooes.model('refund', RefundSchema);