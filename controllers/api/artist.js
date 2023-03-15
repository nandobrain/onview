const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const Artist = require('../../models/artist')

module.exports = {
    createArtist,
    getArtists
    // editArtistName

}

async function createArtist(req, res) {
    try {
        console.log(req.body)
        const newArtist = {
           name: req.body.artist.name,
           role: req.body.artist.role,
           img: req.body.artist.img 
        }
        const artist = await Artist.create(newArtist);
        
        res.json(artist);
    }   catch (err) {
        res.status(400).json(err)
    }
}


async function getArtists(req, res) {
    const artists = await Artist.find({})
    res.json(artists)
    console.log(artists)
}
// async function editArtistInfo(req, res) {
//     try {
//         const user = await User.create(req.body);
//         const token = createJWT(user);
//         res.json(token);
//     }   catch (err) {
//         res.status(400).json(err)
//     }
// }

// async function editArtistName(req, res) {
//     try {
//         const user = await User.create(req.body);
//         const token = createJWT(user);
//         res.json(token);
//     }   catch (err) {
//         res.status(400).json(err)
//     }
// }