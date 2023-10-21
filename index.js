const express = require('express')
const app = express()
const router = require('./routes/route')
const morgan = require('morgan')

app.use(morgan('dev'))

require('dotenv').config()

const port = process.env.PORT || 3000

// Built-in middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})