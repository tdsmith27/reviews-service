module.exports = {
  average: reviews => {
    return (
      reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    );
  },

  formatDate: date => {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return `${months[parseInt(month) - 1]} ${day}, ${year}`;
  }
};
