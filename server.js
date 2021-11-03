const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const PORT = 3000
const mongoURI = "mongodb://localhost:27017/streetball"

app.use(express.json())
app.use(cors())


const teamsController = require('./controllers/teams_controller.js')
app.use('/teams', teamsController)

app.get('/', (req, res) => {
    res.send('API for streetball teams- requests made at /teams')
})


app.listen(PORT, () => {
    console.log('streetball - listining on port', PORT)
})

mongoose.connect(mongoURI, () => {
    console.log('Mongod is reached')
})