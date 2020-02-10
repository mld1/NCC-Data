import React from "react";

class DataInfo extends React.Component {
  render() {
    return (
      <div className="margin">
        <h3>{this.props.data.user.displayName}</h3>

        <br></br>

        <div className="btn-group row">
          <button
            className="btn btn-secondary btn-lg dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.props.data.scan.name} Results
          </button>
          <div className="dropdown-menu">...</div>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="btn-group row">
          <button
            className="btn btn-secondary btn-lg dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Assests
          </button>
          <div className="dropdown-menu">...</div>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="btn-group row">
          <button
            className="btn btn-secondary btn-lg dropdown-toggle"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Vulnerabilities
          </button>
          <div className="dropdown-menu">...</div>
        </div>
      </div>
    );
  }
}

export default DataInfo;
