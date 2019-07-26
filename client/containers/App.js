import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../scss/index.scss';

import Routes from '../components/Route';

class App extends Component {
  state = { 
    token: ""
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default connect(null)(App);





  