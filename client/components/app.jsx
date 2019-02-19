import React from "react";
import axios from "axios";
import ReviewsSummary from "./ReviewsSummary.jsx";
import ReviewList from "./ReviewList.jsx";
import WriteReview from "./WriteReview.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateReviews = this.updateReviews.bind(this);

    this.state = {
      product_id: 27,
      reviews: []
    };
  }

  updateReviews() {
    let url = `/products/${this.state.product_id}/reviews`;
    axios
      .get(url)
      .then(response => this.setState({ reviews: response.data }))
      .catch(err => console.log("error componentDidMount get request", err));
  }

  componentDidMount() {
    this.updateReviews();
  }

  render() {
    return (
      <div>
        <p style={head}>Customer Reviews</p>
        <div className="wrapper" style={wrap}>
          <ReviewsSummary reviews={this.state.reviews} />
          <WriteReview
            product={this.state.product_id}
            update={this.updateReviews}
          />
        </div>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

// STYLES //

const wrap = {
  display: "flex",
  justifyContent: "space-evenly",
  marginLeft: "5%",
  width: "90%",
  height: "200px",
  borderTop: "1px solid #cccccc"
};

const head = {
  fontFamily: "Helvetica",
  fontWeight: "300",
  fontSize: "27px",
  marginBottom: "0px",
  marginLeft: "5%",
  borderBottom: "4px solid #f96302",
  width: "227px"
};

export default App;
