const mongooes = require('mongoose');
const VoucherDetailsSchema = new mongooes.Schema({
    voucher:{
        type:Object,
        required:true,

    },
    user:{
        type:Object,
    },
    recipient:{
        type:String,
        required:true,
    },
    cost:{
        type:Object,
        required:true,
    },
    qr:{
        type:Object,
        required:true,
    }
});
module.exports=mongooes.model('voucherDetails', VoucherDetailsSchema);