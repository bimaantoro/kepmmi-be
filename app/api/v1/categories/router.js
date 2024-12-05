const express = require('express');
const { create } = require('./controller');
const router = express();

router.post('/categories', create);

module.exports = router;