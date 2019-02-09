import React from 'react';
import axios from 'axios';
import ReviewsSummary from './ReviewsSummary.jsx';
import ReviewList from './ReviewList.jsx';

const tempStyle = {
  width: '30%',
  display: 'inline-block',
  marginLeft: '19%',
  marginTop: '10px',
  marginBottom: '10px',
  float: 'left'
}

const wrapStyle = {
  height: '150px',
  width: '90%',
  marginLeft: '5%',
  borderTop: '1px solid #cccccc',
  borderBottom: '1px solid #cccccc',
}

const headStyle = {
  fontFamily: 'helvetica-neue-light',
  marginBottom: '0px',
  marginLeft: '5%',
  borderBottom: '4px solid #f96302',
  width: '200px'
}

const writeReviewStyle = {
  color: '#f96302'
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product_id: 27,
      reviews: []
    };
  }

  componentDidMount() {
    let url = `/products/${this.state.product_id}/reviews`;
    axios.get(url)
      .then(response => this.setState({reviews: response.data}))
      .catch(err => console.log('error componentDidMount get request', err));
  };


  render() {
    return (
      <div>
        <h2 style={headStyle}>Customer Reviews</h2>
        <div className="wrapper" style={wrapStyle}>
        <ReviewsSummary reviews={this.state.reviews}/>
        <div className="placeholder" style={tempStyle}><h3 style={writeReviewStyle}>Write a Review</h3></div>
        </div>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App;