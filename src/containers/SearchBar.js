import React, { Component } from "react";
import { searchWordAction } from "../actions/SearchWord";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

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

  onSearch = e => {
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
            <button
              type="submit"
              className="btn btn-secondary"
              onClick={this.onSearch}
            >
              Search
            </button>
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
