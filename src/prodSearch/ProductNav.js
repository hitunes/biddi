import React, { Component } from "react";
import { Select, Input, Button, Icon } from "antd";
import "./ProductNav.css";

const Option = Select.Option;
const Search = Input.Search;
const ButtonGroup = Button.Group;
export default class ProductNav extends Component {
  handleChange = value => {
    console.log(`selected ${value}`);
  };
  render() {
    return (
      <div className="product-menu">
        <div>
          <SelectList handleChange={this.handleChange} />
        </div>
        <div>
          <SearchInp />
          <Button type="primary">New Product</Button>
          <Button className="menufold-btn">
            <Icon type="menu-fold" />
          </Button>
          <ButtonGroup>
            <Button>
              <Icon type="bars" />
            </Button>
            <Button>
              <Icon type="appstore" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
const SearchInp = () => {
  return (
    <div>
      <Search
        placeholder="Search"
        onSearch={value => console.log(value)}
        style={{ width: 323, height: 32, marginRight: "18px" }}
      />
    </div>
  );
};

const SelectList = handleChange => {
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
