import React, { Component } from "react";
import { Navbar, NavList } from "./navbar/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <NavList />
      </div>
    );
  }
}

export default App;
