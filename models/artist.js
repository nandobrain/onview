const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema( {
    name: {
        type: String, required: true
    },
    role: {
        type: String, required: true
    },
    img: {
        type: String, required: true
    },
    city: String,
    phoneNumber: String,
    email: String,
    socialMedia: String
}, {
    timestamp: true
})

module.exports = new mongoose.model("Artist", artistSchema);
