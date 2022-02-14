const express = require('express');
const router = express.Router();
const User = require('../models/User_Schema');
const { body, validationResult } = require('express-validator');


router.post('/', [
    body('name', 'Enter a name').isLength({ min: 3 }),
    body('password', 'Enter a password of atleast 5 characters').isLength({ min: 5 }),
    body('email', 'Enter a valid Email').isEmail(),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    }).then(user => res.json(user))
    .catch(error =>{res.json({error: 'Please enter the correct value!!', message: error.message})})
    // res.json({"Please "})
})

module.exports = router