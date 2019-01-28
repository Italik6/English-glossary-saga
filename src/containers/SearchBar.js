import React, { Component } from "react";
import { searchWordAction } from "../actions/SearchWord";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Definitions from "../components/definitions";
import Alert from "../components/alert";

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
    console.log("props error", this.props.isError.isError);

    return (
      <div>
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
        {this.props.isError.isError ? <Alert /> : null}
        {this.props.wordData.results ? (
          <Definitions definitions={this.props.wordData.results} />
        ) : null}
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
