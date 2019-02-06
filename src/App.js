import React, { Component } from "react";
import SearchBar from "./containers/SearchBar";
import WordData from "./containers/WordData";
import AdvancedSearch from "./containers/AdvancedSearch";
class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <AdvancedSearch />
        <WordData />
      </div>
    );
  }
}

export default App;
