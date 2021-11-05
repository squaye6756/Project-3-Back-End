const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const db = mongoose.connection
require("dotenv").config()
// const mongoURI = "mongodb://localhost:27017/streetball"
const PORT = process.env.PORT || 3003;
const PROJECT3_DB=process.env.PROJECT3_DB;

app.use(express.json())
app.use(cors())


const teamsController = require('./controllers/teams_controller.js')
const playersController = require('./controllers/players_controller.js')
app.use('/teams', teamsController)
app.use('/players', playersController)


app.get('/', (req, res) => {
    res.send('API for streetball teams- requests made at /teams')
   
})

app.listen(PORT, () => {
    console.log('streetball - listening on port', PORT)
})

mongoose.connect(PROJECT3_DB, () => {
    console.log('Mongod is reached')
})

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', PROJECT3_DB));
db.on('disconnected', () => console.log('mongo disconnected'));