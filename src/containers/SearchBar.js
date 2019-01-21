import React, { Component } from "react";
import { testAction } from "../actions/TestAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    console.log(props.test.test);
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.setState({ term: "" });
  };

  onTest = e => {
    this.props.testAction();
  };

  render() {
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
              onClick={this.onTest}
            >
              Search
            </button>
          </span>
        </form>
        <p>{this.props.test.test}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  test: state.test
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ testAction }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
