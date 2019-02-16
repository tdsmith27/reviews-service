module.exports = {
  average: (reviews) => {
    return (reviews.reduce((sum, review) => sum + review.rating, 0)) / reviews.length;
  }



}