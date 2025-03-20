const mongooes = require('mongoose');
const UserSchema = new mongooes.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    displayName:{
        type:String,
        required:true,
    },
    avatar:{
        type:Object,

    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:Array,
        required:true
    },

    isActive:{
        type:Boolean,
        required:true
    },
    otp:{
        type:Number,
    },
    billingAddress:{
        type:Object,
    },
    shippingAddress:{
        type:Object
    }
});
module.exports=mongooes.model('user', UserSchema);