import React from 'react';

const boxStyle = {
  borderRight: '1px solid #cccccc',
  width: '30%',
  height: '75%',
  display: 'inline-block',
  marginLeft: '20%',
  marginTop: '10px',
  marginBottom: '10px',
  float: 'left',
  color: '#f96302'
}

const ReviewsSummary = ({reviews}) => {
  return (
    <div className="summary_box" style={boxStyle}>
      <h2>{average(reviews).toFixed(1)} out of 5</h2>
      <p>{reviews.length} reviews</p>
    </div>
  )
}

const average = (reviews) => {
  return (reviews.reduce((sum, review) => sum + review.rating, 0)) / reviews.length;
};


export default ReviewsSummary;