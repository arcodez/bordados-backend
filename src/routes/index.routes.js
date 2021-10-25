const controller = require('../controllers/index.controller');

const router = require('express').Router();

// create routes to index.js
router.get('/', controller.index);

// export routes
module.exports = router;