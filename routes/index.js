const express = require('express');
const router = express.Router();

// Methods on the model for interaction with the Beer JSON file.
// Maybe a name change is in order ¯\_(ツ)_/¯
const index = require('../models/index');



// There are a few more actions defined for routes in the index model.
// However be careful, they are brittle and might need some upkeep.
router.get('/', (req, res, next) => {
  index.all((err, beers) => {
    res.render('index', { beers, title: 'Liftopia' });
  });
});

module.exports = router;
