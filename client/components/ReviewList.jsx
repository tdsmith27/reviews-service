import React from "react";
import ReviewListEntry from "./ReviewListEntry.jsx";
const { sortBy } = require("../helpers.js");

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);

    this.state = {
      showAll: false,
      sortBy: "dateDesc"
    };
  }

  onClick(state) {
    this.setState({ showAll: !state });
  }

  onSelect(e) {
    this.setState({ sortBy: e.target.value });
  }

  render() {
    const reviews = sortBy(this.props.reviews, this.state.sortBy);
    return (
      <div>
        <div className="sortBy" style={sortDiv}>
          <div style={sortBox}>
            <div style={sortHead}>Sort By:</div>
            <select
              value={this.state.sortBy}
              onChange={this.onSelect}
              style={select}>
              <option value="dateDesc">Newest</option>
              <option value="dateAsc">Oldest</option>
              <option value="rateDesc">Highest Rated</option>
              <option value="rateAsc">Lowest Rated</option>
            </select>
          </div>
        </div>
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

const sortDiv = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  flexDirection: "column",
  width: "90%",
  marginLeft: "5%",
  borderTop: "1px solid #cccccc"
};

const sortBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  marginTop: "15px"
};

const sortHead = {
  fontSize: "14px",
  color: "#797979",
  fontFamily:
    "HelveticaNeue-Light, helvetica-neue-light, Helvetica Neue, Helvetica, Arial, sans-serif",
  marginBottom: "6px"
};

const select = {
  width: "340px",
  height: "40px",
  color: "#797979",
  marginBottom: "15px",
  paddingLeft: "15px",
  cursor: "pointer",
  backgroundColor: "#fefefe",
  border: "3px solid #e2e2e2",
  borderRadius: "0px",
  WebkitAppearance: "none",
  WebkitBorderRadius: "0px"
};

const button = {
  marginLeft: "5%",
  backgroundColor: "white",
  color: "#515151",
  border: "1px solid #f96302",
  borderRadius: "5px"
};

export default ReviewList;
