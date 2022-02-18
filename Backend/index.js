const connectToMongo = require('./db');
const express = require('express');
connectToMongo();
var cors = require('cors')

const app = express()
const port = 5000
app.use(cors())

// Here we are using the express json format
app.use(express.json())

// Our all the routes
app.use('/authentication', require('./routes/auth'))
app.use('/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})