const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    res.status(200).json({
      'status': true,
      'messages': 'Welcome to Express Product Boilerplate API',
    });
  } catch (err) {
    res.status(500).json({
      'status': false,
      'messages': 'Internal Server Error'
    })
  }
});

module.exports = router;