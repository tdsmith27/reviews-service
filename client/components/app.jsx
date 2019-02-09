import React from 'react';
import axios from 'axios';
import ReviewsSummary from './ReviewsSummary.jsx';
import ReviewList from './ReviewList.jsx';


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
        <h2 style={head}>Customer Reviews</h2>
        <div className="wrapper" style={wrap}>
        <ReviewsSummary reviews={this.state.reviews}/>
        <div className="placeholder" style={temp}><button style={writeReview}>Write a Review</button></div>
        </div>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    )
  }
}


// STYLES //
const temp = {
  width: '30%',
  display: 'inline-block',
  marginLeft: '19%',
  marginTop: '10px',
  marginBottom: '10px',
  float: 'left'
}

const wrap = {
  height: '150px',
  width: '90%',
  marginLeft: '5%',
  borderTop: '1px solid #cccccc',
  borderBottom: '1px solid #cccccc',
}

const head = {
  fontFamily: 'helvetica-neue-light',
  marginBottom: '0px',
  marginLeft: '5%',
  borderBottom: '4px solid #f96302',
  width: '200px'
}

const writeReview = {
  background: '#f96302',
  color: 'white',
  fontSize: '20px',
  width: '205px',
  height: '40px'
}


export default App;