import React from 'react';

const boxStyle = {
  borderRight: '1px solid #cccccc',
  width: '30%',
  display: 'inline-block',
  marginLeft: '19%',
  marginTop: '10px',
  marginBottom: '10px',
  float: 'left'
}

const ReviewsSummary = ({reviews}) => {
  return (
    <div className="summary_box" style={boxStyle}>
      <h4>Reviews Summary</h4>
      <p>Reviews: {reviews.length}</p>
      <p>Average Rating: {average(reviews).toFixed(2)}</p>
    </div>
  )
}

const average = (reviews) => {
  return (reviews.reduce((sum, review) => sum + review.rating, 0)) / reviews.length;
};


export default ReviewsSummary;