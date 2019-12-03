const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USR}:${process.env.DB_PASS}@${process.env.DB_STRING}?retryWrites=true`
);

const reviewSchema = mongoose.Schema({
  review_id: "number",
  product_id: "number",
  product_name: "string",
  author: "string",
  date: "string",
  rating: "number",
  review: "string"
});

const Review = mongoose.model("Review", reviewSchema);

const save = (doc, cb) => {
  let review = new Review(doc);

  review
    .save()
    .then(data => cb(null, data))
    .catch(err => cb(err));
};

const findById = (id, cb) => {
  const query = Review.find({ product_id: id });
  query
    .exec()
    .then(response => cb(null, response))
    .catch(err => cb(err));
};

module.exports.save = save;
module.exports.Review = Review;
module.exports.findById = findById;
