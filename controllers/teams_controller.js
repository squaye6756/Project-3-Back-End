const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Team = require('../models/teams.js')

//INDEX route
router.get('/', (req, res) => {
    Teams.find({}, (err, foundTeams) =>{
        res.json(foundTeams)
    })
})

//CREATE route
router.post('/', (req, res) => {
    Teams.create(req.body, (err, createdTeam) => {
        res.json(createdTeam);
    })
})

//DELETE route
router.delete('/:id', (req, res) => {
    Teams.findByIdAndDelete(req.params.id, (err, deletedTeam) => {
        res.json(deletedTeam)
    })
})

//EDIT route
router.put('/:id', (req, res) => {
    Teams.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, updatedTeam) => {
            res.json(updatedTeam)
        })
})


module.exports = router;
