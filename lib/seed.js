const path = require('path');
const reviews = require(path.join(__dirname, './MOCK_DATA.json'));
const db = require(path.join(__dirname, '../database/index.js'));


for (review of reviews) {
  db.save(review, (err, success) => {
    if (err) console.log('error seeding db')
  })
};

console.log('seeding complete');