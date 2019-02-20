import React, { Component } from "react";
import Dog from './Components/Dog'
import dog from './dogs'
import "./App.css";

class App extends Component {
  render() {
    return <Dog dog={dog}/>;
  }
}

export default App;
