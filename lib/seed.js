const path = require("path");
const reviews = require(path.join(__dirname, "./MOCK_DATA.json"));
const db = require(path.join(__dirname, "../database/index.js"));

db.Review.remove({})
  .then(() => {
    db.Review.insertMany(reviews)
      .then(docs => console.log("seeding complete"))
      .catch(err => console.log("error seeding db"));
  })
  .catch(err => console.log("error wiping database"));
