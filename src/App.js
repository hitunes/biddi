import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Navbar, NavList } from "./navbar/Navbar";
import ProductNav from "./prodSearch/ProductNav";
import Grid from "./main/Grid";
import MainBottom from "./main/MainBottom";
import ListView from "./main/ListView";
import 'antd/dist/antd.css';
import "./App.css";
export default class App extends Component {
  state = {
    sortDropDisplay: "none",
    activeDropDisplay: "none",
    articles: [],
    searchTerm: "",
    selectedRowKeys: [],
  };
  handleSearch = e => {
    this.setState({ searchTerm: e.target.value });
  };
  handleSelectChange = value => {
    this.setState({
      activeDropDisplay: "block"
    });
    console.log(`selected ${value}`);
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
    this.setState({ articles: dataSource, selectedRowKeys: [] });
  };

  onSortDate = () => {
    const data = this.state.articles;
    let data1 = data.map(value => value.attributes.created_at);
   console.log( data1.sort((a, b) => a - b))
    this.setState({ articles: data });
  };
  onSortName = () => {
    const data = this.state.articles;
    let data1 = data.map(value => value.attributes.name);
    let mapped = data1.map((el, i) => {
      return { index: i, value: el.toLowerCase() };
    });
    mapped.sort((a, b) => {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      return 0;
    });
    var result = mapped.map(el => {
      return data1[el.index];
    });
    console.log(mapped)
    this.setState({ articles: data });
  };

  sortByDrop = () => {
    this.setState({
      sortDropDisplay: "block"
    });
  };
  render() {
    let {
      articles,
      searchTerm,
      selectedRowKeys,
      sortDropDisplay,
      activeDropDisplay,
      sortedInfo
    } = this.state;
    return <BrowserRouter>
        <div className="App">
          <Navbar />
          <NavList />
          <ProductNav searchTerm={searchTerm} handleSearch={this.handleSearch} sortByDrop={this.sortByDrop} handleChange={this.handleSelectChange} />
          <Route exact path="/" render={() => <ListView Products={articles} searchTerm={searchTerm} selectedRowKeys={selectedRowKeys} onSelectChange={this.SelectChange} selectAll={this.selectAll} sortedInfo={sortedInfo} tableOnChange={this.tableOnChange} />} />
          <Route path="/grid" render={() => <Grid articles={articles} searchTerm={searchTerm} sortName={this.setNameSort} />} />
          <MainBottom  selectAll={this.selectAll} handleDelete={this.handleDelete} sortDisplay={sortDropDisplay} activeDisplay={activeDropDisplay} onSortName={this.onSortName} onSortDate={this.onSortDate} />
        </div>
      </BrowserRouter>;
  }
}
