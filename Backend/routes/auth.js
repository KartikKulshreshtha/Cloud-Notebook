const express = require('express');
const router = express.Router();
const User = require('../models/User_Schema');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


const JWT_TOKEN = "Kartikisagoodbo#i"
// Here we create the user with a post request with /authentication and here no login is required
router.post('/', [

    // Here we checking the parameters

    body('name', 'Enter a name').isLength({ min: 3 }),
    body('password', 'Enter a password of atleast 5 characters').isLength({ min: 5 }),
    body('email', 'Enter a valid Email').isEmail(),
], async (req, res) => {

    // Here we making the validators for our application
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // Here we are checking that the user with the given email is already exists or not!!
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(404).json({ error: "Email is already exists!!" })
        }
        const salt = await bcrypt.genSalt(10);
        const securedPassword = await bcrypt.hash(req.body.password, salt)
        // Here we creating the user
        user = await User.create({
            name: req.body.name,
            password: securedPassword,
            email: req.body.email,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(data, JWT_TOKEN)
        // console.log(token)
        res.json({ token })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("There is some error!!")
    }
})

// Creating an end point to login the user with /authentication/login
router.post('/login', [

    // Here we checking the parameters
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password cannot be empty!!').exists(),

], async (req, res) => {
    // Here we making the validators for our application
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body
    try {

        // Here we are checking the given email in our database
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ error: "Please enter your correct details" })
        }

        // Here we are comparing the given password with our stored password in the database
        const ComparingPassword = await bcrypt.compare(password, user.password)
        if (!ComparingPassword) {
            return res.status(404).json({ error: "Please enter your correct details" })

        }

        // from here we are generating the jwt token for the user
        const data = {
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(data, JWT_TOKEN)
        // console.log(token)
        res.json({ token })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error!!")
    }
})

module.exports = router