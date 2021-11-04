const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
// const PORT = 3000
require("dotenv").config()
// const mongoURI = "mongodb://localhost:27017/streetball"
const PORT = process.env.PORT || 3003;
const MONGODB_URI=process.env.MONGODB_URI;

app.use(express.json())
app.use(cors())


const teamsController = require('./controllers/teams_controller.js')
const playersController = require('./controllers/players_controller.js')
app.use('/teams', teamsController)
app.use('/players', playersController)


app.get('/', (req, res) => {
    res.send('API for streetball teams- requests made at /teams')
    console.log(process.env)
})

app.listen(PORT, () => {
    console.log('streetball - listening on port', PORT)
})

mongoose.connect(MONGODB_URI, () => {
    console.log('Mongod is reached')
})