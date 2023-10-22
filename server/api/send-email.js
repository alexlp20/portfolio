import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
})

export default defineEventHandler(async (event) => {
    if (event.req.method === 'POST') {
        
        let body = await readBody(event);
        body = JSON.parse(body);

        const mailOptions = {
            from: {
                name: 'Alejandro Laguna',
                address: process.env.EMAIL
            },
            to: [process.env.EMAIL],
            subject: `New email from ${body.name}. ${body.subject}`,
            text: body.content,
        }
        await transporter.sendMail(mailOptions);
    }
  });
