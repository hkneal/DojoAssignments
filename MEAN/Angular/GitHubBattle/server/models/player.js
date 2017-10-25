const mongoose = require('mongoose');
const { Schema } = mongoose;
const PlayerSchema = Schema({
    name: { type: String, required: true, minlength: 2 },
    score: { type: Number },
    avatar_url: { type: String }
}, {
    timestamps: true
});

const Player = mongoose.model('Player', PlayerSchema);