import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Button } from "antd";
import { Navbar, NavList } from "./navbar/Navbar";
import ProductNav from "./prodSearch/ProductNav";
import Grid from "./main/Grid";
import MainBottom from "./main/MainBottom";
import ListView from "./main/ListView";
import "antd/dist/antd.css";
import "./App.css";
export default class App extends Component {
  state = {
    active: "primary",
    articles: [],
    searchTerm: "",
    sortedInfo: null,
    columns: [
      {
        key: 0,
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
        sorter: text => (a, b) => {
          return text.name.length - text.name.length;
        }
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
        key: 7,
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
    ],
    selectedRowKeys: [],
    sort: { column: null, direction: "desc" }
  };
  handleSearch = e => {
    this.setState({ searchTerm: e.target.value });
  };
  getArticles = () => {
    const BASE_URL =
      "https://bidiibuild-test-api.herokuapp.com/api/v1/products";
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => {
        const articles = data.data;
        this.setState({ articles: articles });
      });
  };
  componentDidMount() {
    this.getArticles();
  }
  SelectChange = selectedRowKeys => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    this.setState({ selectedRowKeys });
  };
  selectAll = () => {
    this.setState({
      selectedRowKeys: [...Array.keys()]
    });
  };
  handleDelete = selectedRowKeys => {
    const dataSource = [...this.state.articles];
    console.log(this.state.selectedRowKeys);
    dataSource.splice(
      this.state.selectedRowKeys,
      this.state.selectedRowKeys.length
    );
    this.setState({ articles: dataSource });
  };

  onSortDate = e => {
    const data = this.state.articles;
    data.sort((a, b) => [data[0].id] - [data[0].id]);
    this.setState({ data });
  };
  render() {
    let { articles, searchTerm, columns, selectedRowKeys } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <NavList />
          <ProductNav
            searchTerm={searchTerm}
            handleSearch={this.handleSearch}
          />
          <Route
            exact
            path="/"
            render={() => (
              <ListView
                Products={this.state.articles}
                searchTerm={this.state.searchTerm}
                columns={columns}
                selectedRowKeys={selectedRowKeys}
                onSelectChange={this.SelectChange}
                selectAll={this.selectAll}
              />
            )}
          />
          <Route
            path="/grid"
            render={() => (
              <Grid
                articles={articles}
                searchTerm={searchTerm}
                sortName={this.setNameSort}
              />
            )}
          />
          <MainBottom
            handleDelete={this.handleDelete}
            selectedRowKeys={selectedRowKeys}
            onSortName={this.onSortName}
            onSortDate={this.onSortDate}
          />
        </div>
      </BrowserRouter>
    );
  }
}
