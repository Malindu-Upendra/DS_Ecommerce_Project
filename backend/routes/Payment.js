import nodemailer from 'nodemailer';
import express from "express";
const router = express.Router();

//Sending Email
router.post('/:email', async (req,res) => {
    const email = req.params.email;

    let transporter = nodemailer.createTransport({

        service:'gmail',
        auth: {
            user: 'it19148182@my.sliit.lk',
            pass: '199931012019'
        }
    });

    let mailOptions = {
        from: 'it19148182@my.sliit.lk',
        to: email,
        subject: 'Order from Panitan Bakes',
        text: 'Thank you for ordering from us.Your order on the way'
    };


    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    })

});

export default router