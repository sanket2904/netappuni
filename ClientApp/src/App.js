import React, { Component } from 'react';
import Home from "./components/Home.js"
import Dashboard from "./Dashboard/DashMain"
// import './custom.css'
import "./Styles/index.css"
export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Home />
    );
  }
}
