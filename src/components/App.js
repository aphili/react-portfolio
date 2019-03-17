import React, { Component } from 'react';
import {Dimmer, Loader, Transition} from 'semantic-ui-react'

import '../css/App.css';
import 'semantic-ui-css/semantic.min.css'

import Main from './Main'
import IconBar from './IconBar'
import Footer from './Footer'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      isLoading:true,
      isVisible:false
    }
  }

  componentDidMount(){
    setTimeout(() => {
        this.setState({
          isLoading:false,
          isVisible:true
        })
    }, 900)
  }
  

  render() {
       
    const myLoader = (
        <Dimmer active style={{background:'rgb(79, 79, 79)'}}>
          <Loader size='large'/>
        </Dimmer>
    )
    
    return (
      <div className="App">
        {this.state.isLoading && myLoader}
        <Transition visible={this.state.isVisible} animation="fade up" duration={900}>
          <div className="animation">
            <Main/>
            <IconBar/>
            <br/>
            <Footer/>
          </div>
        </Transition>
      </div>
    );
  }
}
