import React, { Component } from "react";
import { Checkbox } from "antd";
import "./Cards.css";

const CheckboxGroup = Checkbox.Group;
export default class Cards extends Component {
  render() {
    let { checkAll, onChange } = this.props;
    return (
      <div>
        <div className="card-wrapper">
          <div className="upper-content">
            <Checkbox onChange={onChange} checked={checkAll} />
            <div className="image-box">image</div>
            <div className="unit-test">Unit Tests</div>
          </div>
          <div className="below-content">
            <div className="below-content-left">
              <span style={{ color: "#333333" }}>Electric Cables</span>
              <span>Euro Metals</span>
            </div>
            <div className="below-content-right">
              <span>PR-00001</span>
              <span>GHC 100.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
