const Fields = require('./../Models/registerModle')
const catchAsync = require('./../utils/catchAsync')

exports.registerUser = catchAsync(async (req, res, next) => {


    const newuser = await Fields.create({
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

exports.login = async (req, res, next) => {
    const user = await Fields.findOne({ email: req.body.email }).select('+password')

    if (req.body.password !== user.password) {
        res.status(404).json({
            status: 'failed',
            mssg: 'Incorrect password or email'
        })

    } else {
        res.status(201).json({
            status: 'sucess',
            mssg: 'You are logged in '
        })
    }

}