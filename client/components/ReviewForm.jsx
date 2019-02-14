import React from 'react';
import axios from 'axios';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      author: '',
      review: '', 
      rating: ''
    }
  }

  onChange(e) {
    let key = e.target.name;
    let value = e.target.value;

    if (key === 'author')this.setState({author: value});
    if (key === 'review')this.setState({review: value});
    if (key === 'rating')this.setState({rating: value});
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('submitting')
    let review = {
      author: this.state.author,
      date: new Date(),
      product_id: this.props.product,
      rating: this.state.rating,
      review: this.state.review
    }
    console.log(review);

    axios.post('/products/reviews', review)
      .then(res => {
        this.props.update();
        this.props.click();
      })
      .catch(err => console.log('damn'));
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="name" onChange={this.onChange} name="author"/><br></br>
        <input type="text" placeholder="Rating (out of 5)" onChange={this.onChange} name="rating"/><br></br>
        <textarea placeholder="Review this product!" onChange={this.onChange} name="review"></textarea><br></br>
  
        <button onClick={this.onSubmit}>Submit Review</button>
  
      </form>
    )
  }
}

export default ReviewForm;