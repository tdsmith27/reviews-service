import React from "react";
const { formatDate } = require("../helpers.js");

const ReviewListEntry = ({ review }) => (
  <div className="outerWrap" style={outerWrap}>
    <div style={author}>{review.author}</div>
    <div className="innerWrap" style={innerWrap}>
      <div className="deepWrap" style={deepWrap}>
        <div className="ratingBox">
          <div style={rating}>
            <p style={ratingText}>{review.rating.toFixed(1)}</p>
          </div>
          <div style={maxRating}>out of 5</div>
        </div>
        <div style={date}>{formatDate(review.date)}</div>
      </div>
      <div>{review.review}</div>
    </div>
  </div>
);

const outerWrap = {
  display: "flex",
  justifyContent: "flex-start",
  height: "150px",
  width: "90%",
  marginLeft: "5%",
  borderTop: "1px solid #cccccc"
};

const innerWrap = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  flex: "1"
};

const deepWrap = {
  display: "flex",
  justifyContent: "space-between"
};

const author = {
  fontSize: "20px",
  fontWeight: "bold",
  flex: ".15"
};

const rating = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "99px",
  height: "66px",
  border: "2px solid #797979"
};

const ratingText = {
  fontSize: "36px",
  color: "#f96302",
  fontWeight: "bold"
};

const maxRating = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  fontSize: "18px",
  color: "white",
  width: "103px",
  height: "30px",
  backgroundColor: "#797979"
};

const date = {
  fontSize: "14px",
  fontWeight: "bold"
};

const reviewText = {};

export default ReviewListEntry;
