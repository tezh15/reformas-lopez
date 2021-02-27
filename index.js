// Utilizar funcionalidades del Ecmascript 6
'use strict'
// Cargamos los módulos de express y body-parser
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");

const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/formContact", (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3> Email enviado desde React <h3/>
        <ul>
            <li>Email: ${req.body.email}</li>
            <li>Asunto: Solicitud de contacto</li>
        </ul>
        <h3>Mensaje</h3>
        <p>${req.body.comments}</p>
        `;
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            puerto: 465,
            secure: true,
            auth: {
                user: "teameterux@gmail.com",
                pass: "Eterux2021!"
            }
        });

        var mailOptions = {
            from: 'Eterux' + '<teameterux@gmail.com>', // sender address
            to: "teameterux@gmail.com", // list of receivers 
            subject: "Solicitud de contacto ✔", // Subject line
            text: "Solicitud de contacto",
            html: htmlEmail, // html body
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return res.send({ error: err });
            }
            return res.send({ done: "Email sent" });
        });
    });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor a la escucha en el puerto ${PORT}`);
});