const mongooes = require('mongoose');
const DealsSchema = new mongooes.Schema({
    dealDisplayName:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
    },
    type:{
        type:Object,//%
        required:true,
    },
    discount:{
        type:Number,
        required:true,
    },

});
module.exports=mongooes.model('deal', DealsSchema);