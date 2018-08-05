import React, { Component } from "react";
import { Menu, Dropdown, Button, Icon, message } from "antd";

export default class MainBottom extends Component {
  handleMenuClick = e => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  render() {
    let { handleDelete, onSortName, onSortDate, selectedRowKeys } = this.props;
    return (
      <div>
        <div className="button-wrapper">
          <Button onClick={this.selectAll}>Select All</Button>
          <SortCard onSortName={onSortName} onSortDate={onSortDate} />
          <FilterCard />
          <ActiveDropDown handleMenuClick={this.handleMenuClick} />
          <Button
            style={{ marginLeft: "69px" }}
            onClick={selectedRowKeys => handleDelete(selectedRowKeys)}
          >
            <Icon type="delete" style={{ fontSize: 26, color: "#828282" }} />
          </Button>
        </div>
      </div>
    );
  }
}
const SortCard = ({ onSortDate, onSortName }) => {
  return (
    <div className="sort-card">
      <span style={{ fontSize: "11px", color: "#BDBDBD", paddingLeft: "15px" }}>
        SORT BY
      </span>
      <ul className="sort-card-top">
        <li onClick={e => onSortName(e)}>Name</li>
        <li>Category</li>
        <li>Manufacturer</li>
        <li onClick={e => onSortDate(e)}>Created Time</li>
      </ul>
      <ul className="sort-card-mid">
        <li>
          <Icon type="upload" /> Import Products
        </li>
        <li>
          <Icon type="download" /> Export Products
        </li>
      </ul>
      <ul style={{ paddingLeft: "10px" }}>
        <li>
          <Icon type="sync" /> Refresh list
        </li>
      </ul>
    </div>
  );
};

const FilterCard = () => {
  return (
    <div className="filter-card">
      <span
        style={{
          fontSize: "11px",
          color: "#BDBDBD",
          paddingLeft: "15px"
        }}
      >
        DEFAULT FILTERS
      </span>
      <ul className="filter-card-top">
        <li>Name</li>
        <li>Category</li>
        <li>Manufacturer</li>
        <li>Created Time</li>
      </ul>
    </div>
  );
};
const ActiveDropDown = ({ handleMenuClick }) => {
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Active</Menu.Item>
      <Menu.Item key="2">Inactive</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <Button style={{ marginLeft: 8 }}>
          Mark as <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  );
};
