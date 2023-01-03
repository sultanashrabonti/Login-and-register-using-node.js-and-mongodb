const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate: [validator.isEmail]
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    passwordConfirm: {
        type: String,
        validate: {
            validator: function (el) {
                return el === this.password
            },
            message: 'the passwords are not same'
        }
    }
})
// userSchema.pre('save', async function (next) {
//     // only run this if the password was actually modified
//     if (!this.isModified('password')) return next()
//     this.password = await bcrypt.hash(this.password, 12)
//     this.confirmPassword = undefined
//     next()
// })

const User = mongoose.model('User', userSchema)
module.exports = User