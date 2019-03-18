import React, { Component } from 'react';
import {Dimmer, Loader, Transition, Responsive} from 'semantic-ui-react'

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
       
    const getWidth = () => {
      const isSSR = typeof window === 'undefined'
    
      return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
    }
    
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
            <Main width={getWidth}/>
            <IconBar/>
            <Footer/>
          </div>
        </Transition>
      </div>
    );
  }
}
