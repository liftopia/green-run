const fs = require('fs');
const path = require('path');

// we're using a JSON file and this model system as a substitute for an actual db
const beerPath = path.join(__dirname, '../data/beers.json');


// create and write data to beers file
exports.create = function (beerObj, cb) {
  fs.readFile(beerPath, 'utf8', (err, data) => {
    if (err) throw err;
    const beers = JSON.parse(data);
    beers.value.push(beerObj);
    const jsonBeers = JSON.stringify(beers, null, 2);
    fs.writeFile(beerPath, jsonBeers, 'utf8', (error) => {
      if (error) throw error;
      cb(null, 'Successfully added');
    });
  });
};

// get specific data by id
exports.get = function (id, cb) {
  fs.readFile(beerPath, 'utf8', (err, data) => {
    if (err) throw err;
    const beer = findBeerObject(id, data);
    cb(null, beer);
  });
};

function findBeerObject(id, beerList) {
  const beers = JSON.parse(beerList).value;
  const singleBeer = beers.find(el => el.id === id);
  return singleBeer;
}

// gets all data from file
exports.all = function (cb) {
  fs.readFile(beerPath, 'utf8', (err, data) => {
    if (err) throw err;
    cb(null, data);
  });
};
