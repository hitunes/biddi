import React, { Component } from "react";
import { Navbar, NavList } from "./navbar/Navbar";
import ProductNav from "./prodSearch/ProductNav";
import Grid from "./main/Grid";
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
      <div className="App">
        <Navbar />
        <NavList />
        <ProductNav
          searchTerm={this.state.searchTerm}
          handleSearch={this.handleSearch}
        />
        <Grid
          articles={this.state.articles}
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}
// import React from "react";
// import { render } from "react-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Landing from "./Landing";
// import Search from "./Search";
// //switch will redirect the page to error once it does not recognize path
// // const add = (a,b) => {return a + b}
// // const add = (a,b) => a + b
// // Hashrouter---higher order component that inroduce behaviours
// // browserrouter---higher order component that inroduce behaviours set in webpackconfig devserver historyApiFallback: true to make error 404s fall back to index.html
// const FourohFour = () => <h1>404</h1>;

// const App = () => (
//   <BrowserRouter>
//     <div className="app">
//       <Switch>
//         <Route exact path="/" component={Landing} />
//         <Route exact path="/search" component={Search} />
//         <Route component={FourohFour} />
//       </Switch>
//     </div>
//   </BrowserRouter>
