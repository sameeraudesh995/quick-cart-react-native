const mongooes = require('mongoose');
const PaymentMethodSchema = new mongooes.Schema({
    user:{
        type:Object,
        required:true,
    },

    cardInfo:{
        type:Object,
    },

    isPrimary:{
        type:Boolean,
        required:true,
    },
});
module.exports=mongooes.model('paymentMethod', PaymentMethodSchema);