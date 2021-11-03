const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

//Schema
const Team = require('../models/teams.js')

//INDEX route
router.get('/', (req, res) => {
    Team.find({}, (err, foundTeams) =>{
        res.json(foundTeams)
    })
})

//CREATE route
router.post('/', (req, res) => {
    Team.create(req.body, (err, createdTeam) => {
        res.json(createdTeam);
    })
})

//DELETE route
router.delete('/:id', (req, res) => {
    Team.findByIdAndDelete(req.params.id, (err, deletedTeam) => {
        res.json(deletedTeam)
    })
})

//EDIT route
router.put('/:id', (req, res) => {
    Team.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, updatedTeam) => {
            res.json(updatedTeam)
        })
})


module.exports = router;
