import React, { Component } from "react";
import Alert from "../components/alert";
import Definitions from "../components/definitions";
import { connect } from "react-redux";

class WordData extends Component {
  render() {
    console.log("word data", this.props.wordData.results);
    if (this.props.isError.isError) {
      return <Alert />;
    } else {
      return (
        <div className="m-t-2">
          <h3>{this.props.wordData.word}</h3>
          {this.props.wordData.results ? (
            <Definitions definitions={this.props.wordData.results} />
          ) : null}
        </div>
      );
    }
  }
}

function mapStateToProps({ wordData, isError }) {
  return { wordData, isError };
}

export default connect(mapStateToProps)(WordData);
