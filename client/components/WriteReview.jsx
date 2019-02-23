import React from "react";
import ReviewForm from "./ReviewForm.jsx";

class WriteReview extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      viewForm: false
    };
  }

  onClick() {
    this.setState({ viewForm: !this.state.viewForm });
  }

  render() {
    return (
      <div className="reviewBox" style={reviewBox}>
        {!this.state.viewForm ? (
          <button onClick={this.onClick} style={reviewButton}>
            Write a Review
          </button>
        ) : (
          <ReviewForm
            click={this.onClick}
            product={this.props.product}
            update={this.props.update}
          />
        )}
      </div>
    );
  }
}

const reviewButton = {
  background: "#f96302",
  color: "white",
  fontSize: "20px",
  width: "205px",
  height: "40px",
  cursor: "pointer"
};

const reviewBox = {
  display: "flex",
  flexGrow: "1",
  flexBasis: "0",
  justifyContent: "center",
  alignItems: "center"
};

export default WriteReview;
