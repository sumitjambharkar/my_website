const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: {
        type: 'string',

    },
    email: {
        type: 'string',

    },
    number:{
        type: 'number',
    },
    message:{
        type: 'string',
    }
})
module.exports = mongoose.model("User",userSchema)