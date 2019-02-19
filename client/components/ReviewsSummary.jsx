import React from "react";
const { average } = require("../helpers.js");

const ReviewsSummary = ({ reviews }) => (
  <div className="summary_box" style={summaryBox}>
    <h2>{average(reviews).toFixed(1)} out of 5</h2>
    <p>{reviews.length} reviews</p>
  </div>
);

const summaryBox = {
  display: "flex",
  flexGrow: "1",
  flexBasis: "0",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRight: "1px solid #cccccc",
  color: "#f96302"
};

export default ReviewsSummary;
