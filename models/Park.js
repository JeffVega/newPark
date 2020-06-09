const mongoose = require('mongoose');

const parkSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

const Park = mongoose.model('Parking',parkSchema);
module.exports = Park;