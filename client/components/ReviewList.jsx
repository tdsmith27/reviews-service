import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showAll: false
    };
  }

  onClick(state) {
    this.setState({showAll: !state})
  }

  render() {
    return (
    <div>
    {this.state.showAll ? this.props.reviews.map((review, key) => {
      return <ReviewListEntry review={review} key={key}/>
    }) : this.props.reviews.slice(0, 5).map((review, key) => {
      return <ReviewListEntry review={review} key={key}/>
    })}
    <button onClick={() => this.onClick(this.state.showAll)}>{this.state.showAll ? 'Show fewer reviews' : 'Show All Reviews'}</button>
    </div>
  )
}

}



export default ReviewList;