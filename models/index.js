const fs = require('fs');
const path = require('path');

const flights = fs.readFileSync(path.resolve(__dirname, 'data.json'), 'utf-8');

module.exports = {
  flights
};