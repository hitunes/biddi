import React, { Component } from "react";
import { Button } from "antd";
import Cards from "./Cards";
import "./Grid.css";
export default class Grid extends Component {
  state = {
    checker: false
  };
  selectAll = e => {
    this.setState({
      checker: (e.target.checked = true)
    });
  };
  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };
  render() {
    return (
      <div>
        <Cards checkAll={this.state.checker} onChange={this.onChange} />
        <div className="button-wrapper">
          <Button onClick={this.selectAll}>Select All</Button>
        </div>
      </div>
    );
  }
}
