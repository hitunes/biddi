import React, { Component } from "react";
import { Checkbox } from "antd";
import "./Cards.css";
export default class Cards extends Component {
  render() {
    let { onChange, Products, searchTerm } = this.props;
    return (
      <div className="main-card">
        {Products.filter(
          product =>
            `${product.attributes.name}${product.attributes.manufacturer}${
              product.attributes.unit_price
            }${product.attributes.code}`
              .toUpperCase()
              .indexOf(searchTerm.toUpperCase()) >= 0
        ).map((product, index) => (
          <div key={product.id} className="card-wrapper">
            <div className="upper-content">
              <Checkbox onChange={onChange} />
              <div>
                <img
                  className="image-box"
                  src={product.attributes.image}
                  alt=""
                />
              </div>
              <div className="unit-test">Unit Tests</div>
            </div>
            <div className="below-content">
              <div className="below-content-left">
                <span style={{ color: "#333333" }}>
                  {product.attributes.name}
                </span>
                <span>{product.attributes.manufacturer}</span>
              </div>
              <div className="below-content-right">
                <span>{product.attributes.code}</span>
                <span>GHC {product.attributes.unit_price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
