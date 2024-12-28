import express from "express";
import bcryptjs from "bcryptjs";
const router = express.Router();
import userData from "../models/userData.js"; 
import jwt from "jsonwebtoken";
import nodemailer from  "nodemailer";
import { decode } from "punycode";

router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const user = await userData.findOne({ email });
    if (user) {
        return res.json({ message: "User already exists" });
    }

    const hashpassword = await bcryptjs.hash(password, 10);

    const newUser = new userData({
        name,
        email,
        password: hashpassword
    });

    await newUser.save();
    return res.json({ status: true, message: "Record registered" });
});

router.post('/login', async (req,res)=>{
    const {email,password} = req.body
    const user = await userData.findOne({email})
    if(!user){
        return res.json({message : "User is not Registered"})
    }

    const validPassword = await bcryptjs.compare(password,user.password)
    if(!validPassword){
        return res.json({message: "password is incorrect"})
    }

    const token = jwt.sign({name: user.name}, process.env.KEY, {expiresIn: '1h'})
    res.cookie('token',token, {httpOnly: true, maxAge: 3600})
    return res.json({status: true, message: "Login Successfully"})
})


router.post('/forgot-password', async (req,res) => {
    const {email} = req.body
    try{
        const user = await userData.findOne({email})
        if(!user){
            return res.json({message : "user not registerd"})
        }

        const token = jwt.sign({id: user._id}, process.env.KEY, {expiresIn: '5m'})

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'iamvsanup@gmail.com',
              pass: 'veke ysrf tdyj mrxw'
            }
          });
          const encodedToken = encodeURIComponent(token).replace(/\./g, "%2E")
          var mailOptions = {
            from: 'iamvsanup@gmail.com',
            to: email,
            subject: 'Reset your Password',
            text: `http://localhost:3000/reset-password/${encodedToken}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                return res.json ({message: "error sending email"})
            } else {
              return res.json ({status: true, message: "Email has sent"})
            }
          });
    }catch(err){
        console.log(err)
    }
})


router.post('/reset-password/:token', async (req,res) => {
    const {token} = req.params
    const {password} = req.body 

    try{
        const decoded = jwt.verify(token, process.env.KEY)
        const id = decoded.id
        const hashpassword = await bcryptjs.hash(password, 10)
        await userData.findByIdAndUpdate({_id: id}, {password: hashpassword})
        return res.json({status: true, message: "Updated Password"})
    }catch(err) {
        return res.json("Invalid Token")
    }
})

export { router as UserRouter };
