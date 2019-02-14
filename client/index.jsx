import ReactDOM from 'react-dom';
import React from 'react';
const path = require('path');
import App from path.join(__dirname, './components/App.jsx');


ReactDOM.render(<App/>, document.getElementById('app'));