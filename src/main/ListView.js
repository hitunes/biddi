import React, { Component } from "react";
import { Table } from "antd";
import "./ListView.css";

export default class ListView extends Component {
  onChange = (pagination, sorter) => {
    console.log("params", pagination, sorter);
  };
  render() {
    let {
      Products,
      searchTerm,
      columns,
      selectedRowKeys,
      onSelectChange,
      selectAll
    } = this.props;

    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: "all-data",
          text: "Select All Data",
          onSelect: selectAll
        }
      ]
    };
    return (
      <div>
        <div className="list-nav">
          <Table
            rowKey="uid"
            rowSelection={rowSelection}
            columns={columns}
            dataSource={Products.filter(
              (product, index) =>
                `${product.attributes.name}${product.attributes.manufacturer}${
                  product.attributes.unit_price
                }${product.attributes.code}`
                  .toUpperCase()
                  .indexOf(searchTerm.toUpperCase()) >= 0
            )}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}
