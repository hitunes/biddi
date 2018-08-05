import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Select, Input, Button, Icon } from "antd";
import "./ProductNav.css";

const Option = Select.Option;
const Search = Input.Search;
const ButtonGroup = Button.Group;
export default class ProductNav extends Component {
  render() {
    let { handleSearch, searchTerm, sortByDrop, handleChange } = this.props;
    return (
      <div className="product-menu">
        <div>
          <SelectList handleChange={handleChange} />
        </div>
        <div>
          <SearchInp searchTerm={searchTerm} handleSearch={handleSearch} />
          <Button type="primary">New Product</Button>
          <Button className="menufold-btn" onClick={sortByDrop}>
            <Icon type="menu-fold" />
          </Button>
          <ButtonGroup>
            <Button>
              <Link to="/">
                <Icon type="bars" />
              </Link>
            </Button>
            <Button>
              <Link to="/grid">
                <Icon type="appstore" />
              </Link>
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
const SearchInp = ({ searchTerm, handleSearch }) => {
  return (
    <div>
      <Search
        value={searchTerm}
        prefix={<Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />}
        placeholder="Search"
        onChange={handleSearch}
        onSearch={value => console.log(value)}
        style={{ width: 323, height: 32, marginRight: "18px" }}
      />
    </div>
  );
};

const SelectList = ({ handleChange }) => {
  return (
    <Select
      showSearch
      placeholder="DEFAULT FILTERS"
      optionFilterProp="children"
      onChange={handleChange}
      filterOption={(input, option) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="all">All Products</Option>
      <Option value="active">Active Products</Option>
      <Option value="inactive">Inactive Products</Option>
      <Option value="uncategorize">Uncategorize Products</Option>
    </Select>
  );
};
