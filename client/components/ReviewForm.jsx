import React from "react";
import axios from "axios";
import StarRating from "react-star-rating-component";

const deploy = `http://ec2-13-58-187-52.us-east-2.compute.amazonaws.com:3030/`;
const local = "http://localhost:3030";

const Axios = axios.create({
  baseURL: deploy || local
});

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.onStarHover = this.onStarHover.bind(this);
    this.onChange = this.onChange.bind(this);
    this.post = this.post.bind(this);
    this.checkValid = this.checkValid.bind(this);

    this.state = {
      author: "",
      review: "",
      rating: 0,
      tempRating: 0
    };
  }

  onStarHover(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  onChange(e) {
    let key = e.target.name;
    let value = e.target.value;

    if (key === "author") this.setState({ author: value });
    if (key === "review") this.setState({ review: value });
    if (key === "rating") this.setState({ rating: value });
  }

  checkValid(e) {
    e.preventDefault();
    let valid = true;

    if (
      this.state.author === "" ||
      this.state.review === "" ||
      this.state.rating === 0
    )
      valid = false;

    if (valid) this.post(e);
    else console.log("not valid");
  }

  post() {
    console.log("musta been valid");
    let review = {
      author: this.state.author,
      date: new Date(),
      product_id: this.props.product,
      rating: this.state.rating,
      review: this.state.review
    };

    Axios.post("/products/reviews", review)
      .then(res => {
        this.props.update();
        this.props.click();
      })
      .catch(err => console.log("error posting review"));
  }

  render() {
    return (
      <form style={formStyle}>
        <input
          type="text"
          placeholder="name"
          onChange={this.onChange}
          name="author"
        />

        <StarRating
          name="rating"
          value={this.state.rating}
          onStarHover={this.onStarHover}
          starColor={"#f96302"}
          emptyStarColor={"#cccccc"}
        />

        <textarea
          placeholder="Review this product!"
          onChange={this.onChange}
          name="review"
          style={textBox}
        />

        <button onClick={this.checkValid}>Submit Review</button>
        <button onClick={this.props.click}>Nevermind!</button>
      </form>
    );
  }
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center"
};

const textBox = {
  resize: "none",
  height: "75px",
  width: "500px"
};

export default ReviewForm;
