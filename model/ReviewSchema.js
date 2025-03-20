const mongooes = require('mongoose');
const ReviewSchema = new mongooes.Schema({
    user:{
        type:Object,
        required:true,
    },

    product:{
        type:Object,
        required:true,
    },
    resource:{
        type:Object,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },

    starCount:{
        type:Number,//1-5
        required:true,
    },
    comment:{
        type:String,//1-5
        required:true,
    },
});
module.exports=mongooes.model('review', ReviewSchema);