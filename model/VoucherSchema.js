const mongooes = require('mongoose');
const VoucherSchema = new mongooes.Schema({
    displayName:{
        type:Object,
        required:true,
        unique:true
    },
    description:{
        type:String,
    },
    type:{
        type:String,
        required:true,
    },
});
module.exports=mongooes.model('voucher', VoucherSchema);