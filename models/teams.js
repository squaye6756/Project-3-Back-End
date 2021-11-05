const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Player = require('../models/players.js');


const teamSchema = new Schema({
    name: {type: String, required: true},
    logo: String,
    wins: Number,
    losses: Number,
    location: String,
    players: [Player.schema],
    rank: Number
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;