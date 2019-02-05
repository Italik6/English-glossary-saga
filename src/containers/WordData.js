import React, { Component } from "react";
import Alert from "../components/alert";
import Button from "../components/button";
import Definitions from "../components/definitions";
import Rhymes from "../components/rhymes";
import Loader from "../components/loader";
import { searchRhymesAction } from "../actions/SearchRhymes";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class WordData extends Component {
  onRhymesSubmit = event => {
    event.preventDefault();
    this.props.searchRhymesAction(this.props.wordData.word);
  };

  definitionsComponent = () => {
    const { wordData } = this.props;
    if (wordData.results) {
      return <Definitions definitions={wordData.results} />;
    }
  };

  rhymesComponent = () => {
    const { rhymes } = this.props;
    if (rhymes.all) {
      return <Rhymes rhymes={rhymes.all} />;
    }
  };

  buttonComponent = () => {
    const { rhymes, wordData } = this.props;
    if (!rhymes.all && wordData.results) {
      return <Button onClick={this.onRhymesSubmit} />;
    }
  };

  render() {
    console.log(this.props);
    const { wordData } = this.props;
    if (wordData.isError) {
      return <Alert />;
    } else if (wordData.isFetching) {
      return <Loader />;
    } else {
      return (
        <div className="m-t-2">
          <h3>{wordData.word}</h3>
          {this.definitionsComponent()}
          {this.buttonComponent()}
          {this.rhymesComponent()}
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
