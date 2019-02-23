import React from "react";
const { formatDate } = require("../helpers.js");

const ReviewListEntry = ({ review }) => (
  <div className="outerWrap" style={outerWrap}>
    <div style={author}>{review.author} </div>
    <div className="innerWrap" style={innerWrap}>
      <div className="deepWrap" style={deepWrap}>
        <div className="ratingBox">
          <div style={rating}>
            <p style={ratingText}>{review.rating.toFixed(1)} </p>
          </div>
          <div style={maxRating}>out of 5</div>
        </div>
        <div style={date}>{formatDate(review.date)} </div>
      </div>
      <div style={reviewText}>{review.review}</div>
    </div>
  </div>
);

const outerWrap = {
  display: "flex",
  justifyContent: "flex-start",
  width: "90%",
  marginLeft: "5%",
  borderTop: "1px solid #cccccc",
  paddingTop: "5px",
  paddingBottom: "2px"
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
  fontSize: "16px",
  flex: ".15",
  fontWeight: "bold"
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
  fontFamily: "helvetica-neue-bold",
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

const reviewText = {
  marginTop: "10px",
  marginBottom: "10px"
};

export default ReviewListEntry;
