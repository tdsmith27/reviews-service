import React from "react";

const ReviewListEntry = ({ review }) => (
  <div style={wrap}>
    <p>
      {review.author}, {review.date} -- {review.rating}
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
