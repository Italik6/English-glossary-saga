import React, { Component } from "react";
import SearchBar from "./containers/SearchBar";
import WordData from "./containers/WordData";
class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <WordData />
      </div>
    );
  }
}

export default App;
