const express = require('express');

const router = express.Router();
const index = require('../models/index');

// There are a few more actions defined for routes in the index model.
router.get('/', (req, res, next) => {
  index.all((err, beers) => {
    res.render('index', { beers, title: 'Liftopia' });
  });
});

module.exports = router;
