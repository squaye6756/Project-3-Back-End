const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const PORT = 3000
const mongoURI = "mongodb://localhost:27017/streetball"

app.use(express.json())
app.use(cors())




mongoose.connect(mongoURI, () => {
    console.log('Mongod is reached')
})

app.listen(PORT, () => {
    console.log('streetball - listining on port', PORT)
})





