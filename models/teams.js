const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: {type: String, required: true},
    logo: String,
    wins: Number,
    losses: Number,
    location: String,
    player: [Player.schema]
})
const Team = mongoose.model('Team', teamSchema);
module.exports = Team;