const express = require("express");
const router = express.Router();

router.get('/',  function (req, res) {
    return res.send("movies");
})

module.exports = router;