import React from "react";
import "./ProgressBar.css";

class ProgressBar extends React.Component {
  state = {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
    information: 0
  };

  componentDidMount = () => {
    let critical = this.props.data.scan.severityCounts.critical;
    let high = this.props.data.scan.severityCounts.high;
    let medium = this.props.data.scan.severityCounts.medium;
    let low = this.props.data.scan.severityCounts.low;
    let information = this.props.data.scan.severityCounts.information;
    let count = critical + high + medium + low + information;
    this.setState({
      critical: Math.floor((critical / count) * 100) + "%",
      high: Math.floor((high / count) * 100) + "%",
      medium: Math.floor((medium / count) * 100) + "%",
      low: Math.floor((low / count) * 100) + "%",
      information: Math.floor((information / count) * 100) + "%"
    });
  };

  render() {
    return (
      <div className="App">
        <h4>Severity Counts From Last Scan:</h4>
        <div className="progress">
          <div
            className="progress-bar critical"
            role="progressbar"
            style={{ width: this.state.critical }}
            aria-valuenow="15"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Critical: {this.props.data.scan.severityCounts.critical}
          </div>
          <div
            className="progress-bar high"
            role="progressbar"
            style={{ width: this.state.high }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            High: {this.props.data.scan.severityCounts.high}
          </div>
          <div
            className="progress-bar medium"
            role="progressbar"
            style={{ width: this.state.medium }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Medium: {this.props.data.scan.severityCounts.medium}
          </div>
          <div
            className="progress-bar low"
            role="progressbar"
            style={{ width: this.state.low }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Low: {this.props.data.scan.severityCounts.low}
          </div>
          <div
            className="progress-bar information"
            role="progressbar"
            style={{ width: this.state.information }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            // onClick=
          >
            Information: {this.props.data.scan.severityCounts.information}
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;
