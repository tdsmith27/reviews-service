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
    return !this.state.viewForm ? <div className="placeholder" style={temp}><button onClick={this.onClick} style={writeReview}>Write a Review</button></div> : <ReviewForm click={this.onClick} product={this.props.product} update={this.props.update}/>
  }
}


const writeReview = {
  background: '#f96302',
  color: 'black',
  fontSize: '20px',
  width: '205px',
  height: '40px',
  marginTop: '10px'
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