var nodemailer = require("nodemailer");
var express = require("express");
var app = express();


var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'animedia.info.tv@gmail.com',
        pass: 'Colombia2020',
    },
});


let mailOption = {
    from: "animedia.info.tv@gmail.com",
    to: '',
    subject: '',
    text: ''
}


function sendMail(req, res) {

    mailOption.to = req.body.to;
    mailOption.subject = req.body.subject;
    mailOption.text = req.body.text;
    console.log(mailOption);
    
    transporter.sendMail(mailOption, (error, info) => {
        if (error) {
            console.log(error.message)
            res.status(500).send(error.message);
        } else {
            console.log("Email enviado");
            res.status(200).jsonp(req.body);
        }
    });
    // console.log("mail enviado");
}
module.exports = {
    sendMail
}