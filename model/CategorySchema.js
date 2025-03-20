const mongooes = require('mongoose');
const CategorySchema = new mongooes.Schema({
    category:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
    },
    image:{
        type:Object,
        required:true,
    },

});
module.exports=mongooes.model('category', CategorySchema);