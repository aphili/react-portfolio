import React, { Component } from 'react';
import {Dimmer, Loader, Transition} from 'semantic-ui-react'

import '../css/App.css';

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
    }, 1000)
  }
  
  

  render() {
       
    const myLoader = (
        <Dimmer active style={{background:'rgb(79, 79, 79', color:'#6FE3E3'}}>
          <Loader size='large' content="welcome"/>
        </Dimmer>
    )
    
    return (
      <div className="App">
        {this.state.isLoading && myLoader}
        <Transition visible={this.state.isVisible} animation="fade up" duration={900}>
          <div className="animation">
            <Main/>
            <IconBar/>
            <Footer/>
          </div>
        </Transition>
      </div>
    );
  }
}
