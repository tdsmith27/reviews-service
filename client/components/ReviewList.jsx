import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = ({reviews}) => (
  <div>
  {reviews.map(review => {
    return <ReviewListEntry review={review}/>
  })}
  </div>
)


export default ReviewList;