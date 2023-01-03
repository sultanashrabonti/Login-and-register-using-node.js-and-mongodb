const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        validator: [validator.isEmail]
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String,
        validate: {
            validator: function (el) {
                return el === this.password
            },
            message: 'the passwords are not same'
        }
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User