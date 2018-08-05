import React, { Component } from "react";
import { Menu, Dropdown, Button, Icon, message, Table } from "antd";

export default class MainBottom extends Component {
  handleMenuClick = e => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  render() {
    let {
      handleDelete,
      onSortName,
      onSortDate,
      sortDisplay,
      activeDisplay,
      selectAll,
      onSelectChange
    } = this.props;
    return (
      <div>
        <div className="button-wrapper">
          <Button onSelect={selectAll} style={{ display: `${sortDisplay}` }}>
            Select All
          </Button>
          <SortCard
            onSortName={onSortName}
            onSortDate={onSortDate}
            sortDisplay={sortDisplay}
          />
          <FilterCard sortDisplay={sortDisplay} />
          <ActiveDropDown
            handleMenuClick={this.handleMenuClick}
            activeDisplay={activeDisplay}
          />
          <Button
            style={{ marginLeft: "69px", display: `${activeDisplay}` }}
            onClick={handleDelete}
          >
            <Icon type="delete" style={{ fontSize: 26, color: "#828282" }} />
          </Button>
        </div>
      </div>
    );
  }
}
const SortCard = ({ onSortDate, onSortName, sortDisplay }) => {
  return (
    <div className="sort-card" style={{ display: `${sortDisplay}` }}>
      <span style={{ fontSize: "11px", color: "#BDBDBD", paddingLeft: "15px" }}>
        SORT BY
      </span>
      <ul className="sort-card-top">
        <li onClick={onSortName}>Name</li>
        <li>Category</li>
        <li>Manufacturer</li>
        <li onClick={onSortDate}>Created Time</li>
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

const FilterCard = ({ sortDisplay }) => {
  return (
    <div className="filter-card" style={{ display: `${sortDisplay}` }}>
      <span style={{ fontSize: "11px", color: "#BDBDBD", paddingLeft: "15px" }}>
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
const ActiveDropDown = ({ handleMenuClick, activeDisplay }) => {
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Active</Menu.Item>
      <Menu.Item key="2">Inactive</Menu.Item>
    </Menu>
  );
  return (
    <div style={{ display: `${activeDisplay}` }}>
      <Dropdown overlay={menu}>
        <Button style={{ marginLeft: 8 }}>
          Mark as <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  );
};
