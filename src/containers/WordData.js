import React, { Component } from "react";
import Alert from "../components/alert";
import Button from "../components/button";
import List from "../components/list";
import Loader from "../components/loader";
import InteractiveList from "../components/interactiveList";
import { searchRhymesAction } from "../actions/SearchRhymes";
import { searchWordAction } from "../actions/SearchWord";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class WordData extends Component {
  onRhymesSubmit = event => {
    event.preventDefault();
    this.props.searchRhymesAction(this.props.wordData.word);
  };

  onClickItem = item => {
    this.props.searchWordAction(item);
  };

  definitionsComponent = () => {
    const { wordData } = this.props;
    if (wordData.results) {
      const items = wordData.results.map(a => a.definition);
      return (
        <List
          title={"Definitions"}
          items={items}
          onClick={item => this.onClickItem(item)}
        />
      );
    }
  };

  rhymesComponent = () => {
    const { rhymes } = this.props;
    if (rhymes.all) {
      return (
        <InteractiveList
          title={"Rhymes"}
          items={rhymes.all}
          onClick={item => this.onClickItem(item)}
        />
      );
    }
  };

  buttonComponent = () => {
    const { rhymes, wordData } = this.props;
    if (!rhymes.all && wordData.results) {
      return (
        <Button
          title={"Rhymes"}
          className={"btn btn-success m-t-2"}
          onClick={this.onRhymesSubmit}
        />
      );
    }
  };

  render() {
    const { wordData } = this.props;
    if (wordData.isError) {
      return <Alert alertText={"Sorry, your word has not been found."} />;
    } else if (wordData.isFetching) {
      return <Loader />;
    } else {
      return (
        <div className="m-t-2 m-b-2">
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
  return bindActionCreators({ searchRhymesAction, searchWordAction }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WordData);
