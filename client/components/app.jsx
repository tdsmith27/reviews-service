import React from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product_id: 5,
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
        <h2>this is the App</h2>
        <ReviewsSummary reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App;