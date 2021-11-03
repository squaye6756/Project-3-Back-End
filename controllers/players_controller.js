const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()

//INDEX route
router.get('/', (req, res) => {
    Players.find({}, (err, foundPlayers) =>{
        res.json(foundPlayers)
    })
})

//CREATE route
router.post('/', (req, res) => {
    Players.create(req.body, (err, createdPlayer) => {
        res.json(createdPlayer);
    })
})

//DELETE route
router.delete('/:id', (req, res) => {
    Players.findByIdAndDelete(req.params.id, (err, deletedPlayer) => {
        res.json(deletedPlayer)
    })
})

//EDIT route

router.put('/:id', (req, res) => {
    Players.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, updatedPlayer) => {
            res.json(updatedPlayer)
        })
})




module.exports = router;
