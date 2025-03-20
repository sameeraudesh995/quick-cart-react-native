const mongooes = require('mongoose');
const RoleSchema = new mongooes.Schema({
    role:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },

});
module.exports=mongooes.model('role', RoleSchema);