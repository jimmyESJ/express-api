var express = require('express');
var router = express.Router();

router.use('/comment', require('./comment.js'));

module.exports = router;