import React from "react";
import axios from "axios";
import ReviewsSummary from "./ReviewsSummary.jsx";
import ReviewList from "./ReviewList.jsx";
import WriteReview from "./WriteReview.jsx";

// const Axios = axios.create({
//   baseURL: "http://localhost:3030"
// });

class Reviews extends React.Component {
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

  componentDidUpdate(prevProps) {
    if (this.props.product_id !== prevProps.product_id) {
      this.updateReviews();
    }
  }

  render() {
    return (
      <div>
        <p style={head1}>Reviews</p>
        <p style={head}>
          {this.state.reviews.length
            ? this.state.reviews[0].product_name
            : null}
        </p>
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
  fontFamily: "helvetica-neue-light, 'Helvetica Neue', Helvetica",
  fontWeight: "300",
  fontSize: "27px",
  marginBottom: "0px",
  marginLeft: "5%",
  marginTop: "0px",
  borderBottom: "4px solid #f96302",
  width: "300px"
};

const head1 = {
  fontFamily: "helvetica-neue-light, 'Helvetica Neue', Helvetica",
  fontSize: "32px",
  fontWeight: "300",
  marginBottom: "0px",
  marginLeft: "5%",
  width: "300px"
};

export default Reviews;
