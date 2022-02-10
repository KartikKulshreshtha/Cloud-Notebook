const connectToMongo = require('./db');
const express = require('express');
connectToMongo();


const app = express()
const port = 3000

// Our all the routes
app.use('/authentication', require('./routes/auth'))
// app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})