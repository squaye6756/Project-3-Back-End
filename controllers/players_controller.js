const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
//Schema
const Player = require('../models/players.js')

//INDEX route
router.get('/', (req, res) => {
    Player.find({}, (err, foundPlayers) =>{
        res.json(foundPlayers)
    })
})

//CREATE route
router.post('/', (req, res) => {
    Player.create(req.body, (err, createdPlayer) => {
        res.json(createdPlayer);
    })
})

//DELETE route
router.delete('/:id', (req, res) => {
    Player.findByIdAndDelete(req.params.id, (err, deletedPlayer) => {
        res.json(deletedPlayer)
    })
})

//EDIT route

router.put('/:id', (req, res) => {
    Player.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, updatedPlayer) => {
            res.json(updatedPlayer)
        })
})




module.exports = router;
