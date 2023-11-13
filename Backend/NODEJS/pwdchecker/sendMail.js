const sendMail=async(req,res)=> {
    res.send("I am sending mail");
};

let testAccount = await nodemailer.createTestAccount();

let transporter = await nodemailer.transport({
    host:"smtp.ethereal.email",
    port:587,
    auth:{
        user :"abc@gmail.com",
        pass : "shri12",  "zmegg"
    },
});

module.exports=sendMail;