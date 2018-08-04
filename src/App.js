import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Navbar, NavList } from "./navbar/Navbar";
import ProductNav from "./prodSearch/ProductNav";
import Grid from "./main/Grid";
import ListView from "./main/ListView";
import "antd/dist/antd.css";
import "./App.css";

export default class App extends Component {
  state = { articles: [], searchTerm: "" };
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
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <NavList />
          <ProductNav
            searchTerm={this.state.searchTerm}
            handleSearch={this.handleSearch}
          />
          <Route
            exact
            path="/"
            render={() => (
              <ListView
                articles={this.state.articles}
                searchTerm={this.state.searchTerm}
              />
            )}
          />
          <Route
            path="/grid"
            render={() => (
              <Grid
                articles={this.state.articles}
                searchTerm={this.state.searchTerm}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}
