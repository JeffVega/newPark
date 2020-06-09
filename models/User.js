const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:{
        type:String,
     
    },
    password:{
        type:String,
       
    }
})

const Users = mongoose.model('Users',UserSchema)

module.exports = Users;