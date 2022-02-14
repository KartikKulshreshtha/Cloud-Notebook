const jwt = require('jsonwebtoken')
const JWT_TOKEN = "Kartikisagoodbo#i"

// In this function we are getting the users details with the help of jwt token and adding the id into the req object
const fetchinguser = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) {
        res.status(401).send({ error: "Please authenticate the user with valid credentials!!" })
    }
    try {
        const data = jwt.verify(token, JWT_TOKEN)
        req.user = data.user
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate the user with valid credentials!!" })
    }
}

module.exports = fetchinguser