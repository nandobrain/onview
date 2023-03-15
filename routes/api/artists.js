const express = require('express');
const router = express.Router();
const artistCtrl = require('../../controllers/api/artist');


router.post('/', artistCtrl.createArtist);
router.get('/', artistCtrl.getArtists);

module.exports = router