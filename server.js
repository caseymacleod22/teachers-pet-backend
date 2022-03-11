const express = require('express')
const morgan = require ('morgan')
const cors = require('cors')

// initialize the express app
const app = express()

// configure settings app.set()
require('dotenv').config()
require('./config/database')

// mount middleware with app.use()
app.use(morgan('dev'))
app.use(express.json()) // converts incoming json into req.body
app.use(cors())


// mount routes with app.use()
// app.use('/api/lessoons', require('./routes/api/lessons'))


// tell the app to listen port 3001

const port = process.env.PORT || 3001

app.listen(port, function() {
    console.log(`Express is listening for AJAX requests on port ${port}`)
})