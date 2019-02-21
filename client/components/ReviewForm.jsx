import React from "react";
import axios from "axios";

const deploy = `http://ec2-13-58-187-52.us-east-2.compute.amazonaws.com:3030/`;
const local = "http://localhost:3030";

const Axios = axios.create({
  baseURL: deploy || local
});

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.post = this.post.bind(this);
    this.checkValid = this.checkValid.bind(this);

    this.state = {
      author: "",
      review: "",
      rating: ""
    };
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
      this.state.rating === ""
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
    const ratings = [1, 2, 3, 4, 5];
    return (
      <form style={formStyle}>
        <input
          type="text"
          placeholder="name"
          onChange={this.onChange}
          name="author"
        />

        <label>Rating: </label>
        <div className="radioSelectors">
          {ratings.map((rating, key) => (
            <span key={key}>
              {" "}
              <label>{rating}</label>{" "}
              <input
                type="radio"
                name="rating"
                value={rating}
                onChange={this.onChange}
              />{" "}
            </span>
          ))}
        </div>

        <textarea
          placeholder="Review this product!"
          onChange={this.onChange}
          name="review"
          style={textBox}
        />

        <button onClick={this.checkValid} style={leftFlex}>
          Submit Review
        </button>
        <button onClick={this.props.click} style={leftFlex}>
          Nevermind!
        </button>
      </form>
    );
  }
}

const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};

const leftFlex = {
  alignSelf: "flex-start"
};

const textBox = {
  resize: "none",
  height: "75px",
  width: "500px"
};

export default ReviewForm;
