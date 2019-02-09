import React from 'react';
import axios from 'axios';
import ReviewsSummary from './ReviewsSummary.jsx';
import ReviewList from './ReviewList.jsx';
import WriteReview from './WriteReview.jsx';


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
        <p style={head}>Customer Reviews</p>
        <div className="wrapper" style={wrap}>
          <ReviewsSummary reviews={this.state.reviews}/>
          <WriteReview />
        </div>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    )
  }
}


// STYLES //
const wrap = {
  height: '150px',
  width: '90%',
  marginLeft: '5%',
  borderTop: '1px solid #cccccc',
  borderBottom: '1px solid #cccccc',
}

const head = {
  fontFamily: 'Helvetica',
  fontWeight: '300',
  fontSize: '27px',
  marginBottom: '0px',
  marginLeft: '5%',
  borderBottom: '4px solid #f96302',
  width: '227px'
}

export default App;