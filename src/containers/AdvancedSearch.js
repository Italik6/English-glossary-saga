import React, { Component } from "react";
import { advancedSearchAction } from "../actions/AdvancedSearch";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loader from "../components/loader";
import List from "../components/list";
import Button from "../components/button";

class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, lettersAmount: 2, firstLetter: "" };
  }

  onSelectChange = event => {
    this.setState({ lettersAmount: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.setState({ lettersAmount: "", firstLetter: "" });
  };

  onAdvancedSearch = () => {
    this.setState({ open: false });
    this.props.advancedSearchAction(
      this.state.lettersAmount,
      this.state.firstLetter
    );
  };

  onInputChange = event => {
    this.setState({ firstLetter: event.target.value });
  };

  showOptionClick = () => {
    this.setState(prevState => ({
      open: !prevState.open,
      lettersAmount: 2,
      firstLetter: ""
    }));
  };

  formComponent = () => {
    if (this.state.open === true) {
      return (
        <form onSubmit={this.onFormSubmit} className="input-group">
          <p className="form-label">Number of letters</p>
          <select
            value={this.state.lettersAmount}
            onChange={this.onSelectChange}
            className="form-control m-b-2"
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
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
        </form>
      );
    } else {
      return null;
    }
  };

  advancedResults = () => {
    const { advancedSearch } = this.props;
    if (advancedSearch.advancedSearch) {
      return <List title={"Results"} items={advancedSearch.advancedSearch} />;
    } else if (advancedSearch.isFetching) {
      return <Loader />;
    }
  };

  render() {
    return (
      <div className="m-t-2">
        <p onClick={this.showOptionClick} className="link-text">
          More search options
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
  return bindActionCreators({ advancedSearchAction }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdvancedSearch);
