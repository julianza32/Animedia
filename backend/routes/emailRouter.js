const express = require('express');
const emailControll = require('../controllers/emailController');

var api = express.Router();

api.post('/sendMail',emailControll.sendMail);

module.exports=api;