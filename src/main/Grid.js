import React, { Component } from "react";
import Cards from "./Cards";
import "./Grid.css";
export default class Grid extends Component {
  onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };
  render() {
    let { articles, searchTerm } = this.props;
    return (
      <div>
        <Cards
          searchTerm={searchTerm}
          Products={articles}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
