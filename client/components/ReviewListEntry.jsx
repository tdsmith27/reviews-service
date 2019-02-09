import React from 'react';

const ReviewListEntry = ({review}) => (
  <div>
  <p>{review.author}, {review.date} -- {review.rating}</p>
  <p>{review.review}</p>
  </div>

)

export default ReviewListEntry;