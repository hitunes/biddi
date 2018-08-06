import React, { Component } from "react";
import { Table, Button } from "antd";
import "./ListView.css";

export default class ListView extends Component {
    state = {
    sortedInfo: null
  };

  handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    this.setState({
      sortedInfo: sorter
    });
  };

  render() {
    let {
      Products,
      searchTerm,
      selectedRowKeys,
      onSelectChange,
      selectAll,
    } = this.props;
      let { sortedInfo} = this.state;
    sortedInfo = sortedInfo || {};
    const columns = [
      {
        key: "name",
        title: "Name",
        dataIndex: "attributes",
        width: "30%",
        render: text => (
          <span>
            <img
              src={text.image}
              alt="products"
              width="40"
              height="40"
              style={{ marginRight: "18px" }}
            />
            <span>{text.name}</span>
          </span>
        ),
        sorter: text => (a, b) => a.text.name.length - b.text.name.length,
        sortOrder: sortedInfo.columnKey === "name" && sortedInfo.order
      },
      { key: 1, title: "Code", dataIndex: "attributes.code" },
      { key: 2, title: "Unit Price", dataIndex: "attributes.unit_price" },
      { key: 3, title: "Manufacturer", dataIndex: "attributes.manufacturer" },
      { key: 4, title: "Uom", dataIndex: "attributes.uom" },
      { key: 5, title: "Category", dataIndex: "attributes.category" },
      {
        key: 6,
        title: "reorder level ",
        dataIndex: "attributes.reorder_level"
      },
      {
        key: "attributes.created_at",
        title: "Created Date ",
        dataIndex: "attributes.created_at",
              sorter: (a, b) => a.attributes.created_at - b.attributes.created_at,
      sortOrder: sortedInfo.columnKey === "attributes.created_at" && sortedInfo.order
      },
      {
        key: 8,
        title: "status ",
        dataIndex: "attributes",
        render: text => (
          <span>
            <Button type={text.is_active !== false ? "primary" : "danger"}>
              {text.is_active !== false ? "active" : "not-active"}
            </Button>
          </span>
        )
      }
    ];
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
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
