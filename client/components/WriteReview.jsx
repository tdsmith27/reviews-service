import React from 'react';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);

    this.state = {
      writing: false
    };
  }

  onClick() {
    this.setState({writing: !this.state.writing})
  }

  render() {
    return !this.state.writing ? <div className="placeholder" style={temp}><button onClick={this.onClick} style={writeReview}>Write a Review</button></div> : <div>now writing review</div>
  }
}


const writeReview = {
  background: '#f96302',
  color: 'white',
  fontSize: '20px',
  width: '205px',
  height: '40px',
  marginTop: '10px'
}

const temp = {
  width: '30%',
  display: 'inline-block',
  marginLeft: '19%',
  marginTop: '10px',
  marginBottom: '10px',
  float: 'left'
}

export default WriteReview;