const mongooes = require('mongoose');
const BookMarkSchema = new mongooes.Schema({
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

});
module.exports=mongooes.model('bookmark', BookMarkSchema);