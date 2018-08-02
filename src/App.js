import React, { Component } from "react";
import { Navbar, NavList } from "./navbar/Navbar";
import ProductNav from "./prodSearch/ProductNav";
import "antd/dist/antd.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <NavList />
        <ProductNav />
      </div>
    );
  }
}

export default App;
