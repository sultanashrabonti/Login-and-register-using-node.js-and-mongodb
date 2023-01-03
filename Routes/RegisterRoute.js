const express = require('express')
const RegisterController = require('./../Controllers/RegisterController')
const router = express.Router()

router.route('/Register').post(RegisterController.registerUser)
module.exports = router