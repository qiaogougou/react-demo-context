import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

class Title extends Component {
  static contextTypes = {
    title: PropTypes.string,
    themeColor: PropTypes.string
  }
  render() {
    console.log(this.props)
    console.log(this.context)
    const {themeColor} = this.context
    return (
    // <h1>{ this.props.title }</h1>
      <h1 style={{color: themeColor}}>{ this.context.title }</h1>
    )
  }
}

class Demo extends Component {
  static contextTypes = {
    title: PropTypes.string
  }
  render(){
    return (
      <div>
        {/* { this.props.title } */}
        { this.context.title }
      </div>
    )
  }
}

class Button extends Component {
  static contextTypes = {
    title: PropTypes.string,
    themeColor: PropTypes.string,
    handleChangeThemeColor: PropTypes.func
  }
  render(){
    const {themeColor, handleChangeThemeColor} = this.context
    return (
      <div>
        <button type="button" style={{color: themeColor}} 
          onClick={()=>handleChangeThemeColor('red')}
        > Red</button>
        <button type="button" style={{color: themeColor}}
          onClick={()=>handleChangeThemeColor('green')}
        >Green</button>
      </div>
    )
  }
}

class App extends Component {
  static childContextTypes = {
    title: PropTypes.string,
    themeColor: PropTypes.string,
    handleChangeThemeColor: PropTypes.func
  }
  constructor(){
    super()
    this.state = {
      themeColor: ''
    }
  }
  getChildContext(){
    return {
      title: 'App transfer Title',
      themeColor: this.state.themeColor,
      handleChangeThemeColor: (color)=>this.handleChangeThemeColor(color)
    }
  }
  handleChangeThemeColor(color) {
    this.setState({
      themeColor: color
    })
  }
  render(){
    return (
      <div>
        {/* <Demo title=" Title "></Demo> */}
        <Demo></Demo>
        <Title></Title>
        <Button></Button>
      </div>
    )
  }
}

export default App;
