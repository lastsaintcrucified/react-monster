import React from "react";
import { Component } from "react";

class Search extends Component {
  state = {
    inSearch: ""
  };

  render() {
    return (
      <div
        className="input-group mb-5 mx-auto"
        style={{ width: "20vw", marginTop: "40px" }}
      >
        <input
          className="form-control"
          onKeyUp={this.props.handleSearch}
          style={{ borderRadius: "10px" }}
        />
      </div>
    );
  }
}
export default Search;
