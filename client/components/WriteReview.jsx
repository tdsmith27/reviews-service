import React from 'react';
import ReviewForm from './ReviewForm.jsx';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      viewForm: false
    };
  }

  onClick() {
    this.setState({viewForm: !this.state.viewForm})
  }

  render() {
    return (
      <div className="reviewBox" style={reviewBox}>
        {!this.state.viewForm ? <button onClick={this.onClick} style={reviewButton}>Write a Review</button> : <ReviewForm click={this.onClick} product={this.props.product} update={this.props.update}/> }
      </div>
    )
  }
}

const reviewButton = {
  background: '#f96302',
  color: 'white',
  fontSize: '20px',
  width: '205px',
  height: '40px'
}

const reviewBox = {
  display: 'flex',
  flexGrow: '1',
  flexBasis: '0',
  justifyContent: 'center',
  alignItems: 'center'
}


const temp = {
  width: '30%',
  height: '150px',
  display: 'inline-block',
  marginLeft: '19%',
  marginTop: '10px',
  marginBottom: '10px',
  float: 'left'
}

export default WriteReview;