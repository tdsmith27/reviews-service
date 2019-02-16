import React from 'react';
import axios from 'axios';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.post = this.post.bind(this);

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

  post(e) {
    e.preventDefault();
    let review = {
      author: this.state.author,
      date: new Date(),
      product_id: this.props.product,
      rating: this.state.rating,
      review: this.state.review
    }

    axios.post('/products/reviews', review)
      .then(res => {
        this.props.update();
        this.props.click();
      })
      .catch(err => console.log('error posting review'));
  }

  render() {
    const ratings = [1,2,3,4,5]
    return (
      <form>

        <input type="text" placeholder="name" onChange={this.onChange} name="author"/>
        <br></br>

        <label>Rating: </label>
        {ratings.map((rating, key) => <span key={key}> <label>{rating}</label> <input type="radio" name="rating" value={rating} onChange={this.onChange}/> </span>)}
        <br></br>

        <textarea placeholder="Review this product!" onChange={this.onChange} name="review" style={textBox}></textarea>
        <br></br>
  
        <button onClick={this.post}>Submit Review</button>
  
      </form>
    )
  }
}

const textBox = {
  resize: 'none',
  height: '75px',
  width: '300px'
}

export default ReviewForm;