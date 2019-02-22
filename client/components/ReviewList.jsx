import React from "react";
import ReviewListEntry from "./ReviewListEntry.jsx";
const { sortByDate } = require("../helpers.js");

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAll: false
    };
  }

  onClick(state) {
    this.setState({ showAll: !state });
  }

  render() {
    const reviews = sortByDate(this.props.reviews);
    return (
      <div>
        {this.state.showAll
          ? reviews.map((review, key) => {
              return <ReviewListEntry review={review} key={key} />;
            })
          : reviews.slice(0, 5).map((review, key) => {
              return <ReviewListEntry review={review} key={key} />;
            })}
        <button style={button} onClick={() => this.onClick(this.state.showAll)}>
          {this.state.showAll ? "Show fewer reviews" : "Show All Reviews"}
        </button>
      </div>
    );
  }
}

const button = {
  marginLeft: "5%",
  backgroundColor: "white",
  color: "#515151",
  border: "1px solid #f96302",
  borderRadius: "5px"
};

export default ReviewList;
