
import nodemailer from 'nodemailer';

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'alejandrolagunaperez20@gmail.com',
    pass: 'your_email_password',
  },
});

// Define the route handler for sending emails
module.exports = (req, res) => {
  const { name, email, message } = req.body;

  // Configure the email data
  const mailOptions = {
    from: 'your_email@example.com',
    to: 'your_email@example.com', // Your email address
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
};
