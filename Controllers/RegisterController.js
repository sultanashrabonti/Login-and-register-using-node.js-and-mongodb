const User = require('./../Models/registerModle')
const catchAsync = require('./../utils/catchAsync')

exports.registerUser = catchAsync(async (req, res, next) => {


    const newuser = await User.create({
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm
    })
    res.status(201).json({
        status: 'sucess',
        mssg: 'hey signed in sucessfully',
        user: newuser
    })




})