import React from "react";
const { formatDate } = require("../helpers.js");

const ReviewListEntry = ({ review }) => (
  <div style={wrap}>
    <p>
      {review.author} -- {formatDate(review.date)} -- {review.rating}
    </p>
    <p>{review.review}</p>
  </div>
);

const wrap = {
  height: "150px",
  width: "90%",
  marginLeft: "5%",
  borderTop: "1px solid #cccccc"
};

export default ReviewListEntry;
