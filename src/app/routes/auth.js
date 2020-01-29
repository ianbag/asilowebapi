const express = require('express')
const route = express.Router()
const ResetPassController = require('./../auth/forgot')

route.post('/esqueci-a-senha', ResetPassController.sendMailForgot)
route.post('/esqueci-a-senha/:token', ResetPassController.resetAndDefineNewPass)

module.exports = route