import React from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';
import axios from 'axios';

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
  marginLeft: '5%',
  borderBottom: '4px solid #f96302',
  width: '200px'
}

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
        <h2 style={headStyle}>Customer Reviews</h2>
        <div className="wrapper" style={wrapStyle}>
        <ReviewsSummary reviews={this.state.reviews}/>
        <div className="placeholder" style={tempStyle}><p>placeholder</p></div>
        </div>
      </div>
    )
  }
}

export default App;