import React from 'react';

const ReviewsSummary = ({reviews}) => {
  return (
    <div>
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