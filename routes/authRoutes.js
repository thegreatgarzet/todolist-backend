import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const router = express.Router();

//Rota de Registrar
router.post('/register', async (req, res) =>{
    try {
        const {email, password} = req.body;

        const existingUser = await User.findOne({email});

        if(existingUser) return res.status(400).json({error: 'Email already in use'});

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({email, password: hashedPassword});

        await newUser.save();

        const checkExistingUser = await User.findOne({email});

        if(!checkExistingUser) return res.status(401).json({error: 'Couldnt find or create new user'});

        const token = jwt.sign({id: checkExistingUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.status(201).json({token});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: `Server Error: ${error}`})
    }
});

//Rota de Logar
router.post('/login', async (req, res) =>{
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email});

        if(!user) return res.status(401).json({error: 'Invalid Credentials'});

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(401).json({error: 'Invalid Credentials'});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.json({token});
    } catch (error) {
        res.status(500).json({error: `Server Error: ${error}`})
    }
});

export default router;