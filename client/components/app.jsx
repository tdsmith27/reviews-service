import React from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>this is the App</h2>
        <ReviewsSummary/>
      </div>
    )
  }
}

export default App;