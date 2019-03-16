import React, { Component } from 'react';
import './css/App.css';

import Main from './components/Main'
import IconBar from './components/IconBar'
import Footer from './components/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Main/>
        <IconBar/>
        <Footer/>
      </div>
    );
  }
}

export default App;
