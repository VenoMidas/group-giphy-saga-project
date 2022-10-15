const express = require('express');
const router = express.Router();
// Step 1: import axios
const axios = require('axios');

// Client makes a request to /random
router.get('/:searchTag', (req, res) => {
    const searchTag = req.params.tag; // req.query.tag
    // Make a request to the GIPHY API
    // searchString???
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchTag}`)
        .then((response) => {
            // Send the response from GIPHY to the client
            res.send(response.data);
        })
        .catch((e) => {
            console.log(e);
            res.sendStatus(500);
        })
})

module.exports = router;