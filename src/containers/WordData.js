import React, { Component } from "react";
import Alert from "../components/alert";
import Definitions from "../components/definitions";
import Rhymes from "../components/rhymes";
import { searchRhymesAction } from "../actions/SearchRhymes";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class WordData extends Component {
  onRhymesSubmit = event => {
    event.preventDefault();
    this.props.searchRhymesAction(this.props.wordData.word);
  };

  render() {
    if (this.props.isError.isError) {
      return <Alert />;
    } else {
      return (
        <div className="m-t-2">
          <h3>{this.props.wordData.word}</h3>
          {this.props.wordData.results ? (
            <Definitions definitions={this.props.wordData.results} />
          ) : null}
          {this.props.rhymes.all === undefined &&
          this.props.wordData.results ? (
            <button
              className="btn btn-success m-t-2"
              onClick={this.onRhymesSubmit}
            >
              Rhymes
            </button>
          ) : null}
          {this.props.rhymes.all !== undefined ? (
            <Rhymes rhymes={this.props.rhymes.all} />
          ) : null}
        </div>
      );
    }
  }
}

function mapStateToProps({ wordData, isError, rhymes }) {
  return { wordData, isError, rhymes };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchRhymesAction }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordData);
