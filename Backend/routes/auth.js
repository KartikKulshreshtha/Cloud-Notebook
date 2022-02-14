const express = require('express');
const router = express.Router();
const User = require('../models/User_Schema');
const { body, validationResult } = require('express-validator');

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
        // Here we creating the user
        user = await User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        })

        res.json({ "Status": 'Done' })
    } catch (error) {
        console.error(error.message)
        res.status(500).send("There is some error!!")
    }
})

module.exports = router