import React, { Component } from "react";
import { advancedSearchAction } from "../actions/AdvancedSearch";
import { searchWordAction } from "../actions/SearchWord";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "../components/loader";
import InteractiveList from "../components/interactiveList";
import Button from "../components/button";
import Alert from "../components/alert";
import Form from "../components/form";

class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, lettersAmount: 2, firstLetter: "" };
  }

  onSelectChange = event => {
    this.setState({ lettersAmount: event.target.value });
  };

  onInputChange = event => {
    this.setState({ firstLetter: event.target.value });
  };

  onClickItem = item => {
    this.props.searchWordAction(item);
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.setState({ lettersAmount: "", firstLetter: "" });
  };

  showOptionClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
      lettersAmount: 2,
      firstLetter: ""
    }));
  };

  onAdvancedSearch = () => {
    this.setState({ open: false });
    this.props.advancedSearchAction(
      this.state.lettersAmount,
      this.state.firstLetter
    );
  };

  formComponent = () => {
    const selectArray = [2, 3, 4, 5, 6];
    if (this.state.open === true) {
      return (
        <Form onClick={this.onFormSubmit}>
          <p className="form-label">Number of letters</p>
          <select
            value={this.state.lettersAmount}
            onChange={this.onSelectChange}
            className="form-control m-b-2"
          >
            {selectArray.map(e => (
              <option value={e}>{e}</option>
            ))}
          </select>
          <p className="form-label">Starting letter</p>
          <input
            maxLength="1"
            placeholder="First letter"
            value={this.state.firstLetter}
            className="form-control"
            onChange={this.onInputChange}
          />
          <Button
            title={"Search"}
            className={"btn btn-success m-t-2"}
            onClick={this.onAdvancedSearch}
          />
        </Form>
      );
    }
  };

  advancedResults = () => {
    const { advancedSearch } = this.props;
    const results = advancedSearch.advancedSearch;

    if (results && results.length > 0) {
      return (
        <InteractiveList
          title={"Results"}
          items={results}
          onClick={item => this.onClickItem(item)}
        />
      );
    } else if (advancedSearch.isFetching) {
      return <Loader />;
    } else if (results && results.length === 0) {
      return <Alert alertText={"Sorry, no results for your search."} />;
    }
  };

  render() {
    return (
      <div className="m-t-2">
        <p onClick={this.showOptionClick} className="link-text">
          Advanced search options
        </p>
        {this.formComponent()}
        {this.advancedResults()}
      </div>
    );
  }
}

function mapStateToProps({ advancedSearch, isFetching }) {
  return { advancedSearch, isFetching };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { advancedSearchAction, searchWordAction },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedSearch);
