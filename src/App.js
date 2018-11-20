import React, { Component } from 'react';
import TopNavbar from './Components/TopNavbar/TopNavbar';
import Footer from './Components/Footer/Footer';
import PropTypes from 'prop-types';
import './App.css';

import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar/>
        <Main env={this.props.env}/>
        <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  env: PropTypes.object.isRequired
};

export default App;
