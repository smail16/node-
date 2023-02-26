var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ismailfourati94@gmail.com',
    pass: '**************'
  }
});

var mailOptions = {
  from: 'ismailfourati94@gmail.com',
  to: 'speth4tunisia@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});