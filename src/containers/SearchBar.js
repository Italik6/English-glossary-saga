import React, { Component } from "react";
import { searchWordAction } from "../actions/SearchWord";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Button from "../components/button";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.setState({ term: "" });
  };

  onSearch = () => {
    this.props.searchWordAction(this.state.term);
  };

  render() {
    return (
      <div className="m-t-2">
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Search a word"
            value={this.state.term}
            className="form-control"
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <Button
              title={"Search"}
              className={"btn btn-secondary"}
              onClick={this.onSearch}
            />
          </span>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  wordData: state.wordData,
  isError: state.isError
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchWordAction }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
