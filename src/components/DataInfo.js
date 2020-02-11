import React from "react";
import moment from "moment";
import ProgressBar from "./ProgressBar";

class DataInfo extends React.Component {
  state = {
    showCollapseScan: false,
    showCollapseAssets: false,
    showCollapseAssetsID9: false,
    showCollapseAssetsSeverityLists: false,
    showCollapseAssetsSanners: false
  };

  // Collapse BUTTON Scan
  handleClickCollapseScan = () => {
    if (this.state.showCollapseScan === false) {
      this.setState({
        showCollapseScan: true
      });
    } else {
      this.setState({
        showCollapseScan: false
      });
    }
    console.log("woopdiwoop");
  };

  handleClickCollapseAssets = () => {
    if (this.state.showCollapseAssets === false) {
      this.setState({
        showCollapseAssets: true
      });
    } else {
      this.setState({
        showCollapseAssets: false
      });
    }
  };

  handleClickCollapseAssetsID9 = () => {
    if (this.state.showCollapseAssetsID9 === false) {
      this.setState({
        showCollapseAssetsID9: true
      });
    } else {
      this.setState({
        showCollapseAssetsID9: false
      });
    }
  };

  handleClickCollapseAssetsSeverityLists = () => {
    if (this.state.showCollapseAssetsSeverityLists === false) {
      this.setState({
        showCollapseAssetsSeverityLists: true
      });
    } else {
      this.setState({
        showCollapseAssetsSeverityLists: false
      });
    }
  };

  handleClickCollapseScanners = () => {
    if (this.state.showCollapseScanners === false) {
      this.setState({
        showCollapseScanners: true
      });
    } else {
      this.setState({
        showCollapseScanners: false
      });
    }
  };

  getCount(asset) {
    let count = 0;
    this.props.data.scan.vulnerabilities.forEach(vul => {
      if (vul.affectedAssets.includes(asset.id) === true) {
        count++;
      }
    });

    return count;
  }
  render() {
    return (
      <div className="margin">
        <br></br>
        {/* Collapse for Scan Results */}
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a
                  data-toggle="collapse"
                  href="#collapse1"
                  onClick={this.handleClickCollapseScan}
                >
                  {" "}
                  {this.props.data.scan.name} Results -{" "}
                  {this.props.data.scan.status}{" "}
                  {moment(this.props.data.scan.dateCompleted).format(
                    "do MMM YYYY"
                  )}
                </a>
              </h4>
            </div>
            <div
              id="collapse1"
              className="panel-collapse collapse"
              style={{
                display: this.state.showCollapseScan ? "inline" : "none"
              }}
            >
              <div className="panel-body">
                <div className="card">
                  <ul className="list-group list-group-flush">
                    {/* Collapse Scanners */}
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            href="#collapseScanners"
                            onClick={this.handleClickCollapseScanners}
                          >
                            Scanners:
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseScanners"
                        className="panel-collapse collapse"
                        style={{
                          display: this.state.showCollapseScanners
                            ? "inline"
                            : "none"
                        }}
                      >
                        <div className="panel-body">
                          <li className="list-group-item">
                            {this.props.data.scan.scanners.map(scanner => {
                              return (
                                <ul>
                                  <li>{scanner}</li>
                                </ul>
                              );
                            })}
                          </li>
                        </div>
                      </div>
                    </div>
                    {/* severity list */}
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <h6 className="panel-title">
                          <a
                            data-toggle="collapse"
                            href="#collapseAssestsID9"
                            onClick={
                              this.handleClickCollapseAssetsSeverityLists
                            }
                          >
                            Severity Counts:
                          </a>
                        </h6>
                      </div>
                      <div
                        id="collapseAssetsID9"
                        className="panel-collapse collapse"
                        style={{
                          display: this.state.showCollapseAssetsSeverityLists
                            ? "inline"
                            : "none"
                        }}
                      >
                        <div className="panel-body">
                          <li className="list-group-item">
                            <ProgressBar data={this.props.data} />
                          </li>
                          <li>
                            <div className="panel-group">
                              <div className="panel panel-default">
                                <div className="panel-heading">
                                  <h6 className="panel-title">
                                    <a
                                      data-toggle="collapse"
                                      href="#collapseAssets"
                                      onClick={this.handleClickCollapseAssets}
                                    >
                                      Vulnerabilities
                                    </a>
                                  </h6>
                                </div>

                                <div
                                  id="collapseAssets"
                                  className="panel-collapse collapse"
                                  style={{
                                    display: this.state.showCollapseAssets
                                      ? "inline"
                                      : "none"
                                  }}
                                >
                                  <div className="panel-body">
                                    <div className="panel-body">
                                      {this.props.data.scan.vulnerabilities.map(
                                        vul => {
                                          return (
                                            <ul>
                                              <li>Id: {vul.id}</li>
                                              <li>Name: {vul.name}</li>
                                              <li>Severity: {vul.severity}</li>
                                              <li>
                                                Description: {vul.description}
                                              </li>
                                              <li>Solution: {vul.solution}</li>
                                              <li>
                                                References: {vul.referneces}
                                              </li>
                                              <li>
                                                CVSS Base Score:{" "}
                                                {vul.cvssBaseScore}
                                              </li>
                                              <li>
                                                Affected Assests:{" "}
                                                {vul.affectedAssets}
                                              </li>
                                              <br></br>
                                              <br></br>
                                            </ul>
                                          );
                                        }
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </div>
                      </div>
                    </div>{" "}
                    {/* Assests Collapse */}
                    <li>
                      <div className="panel-group">
                        <div className="panel panel-default">
                          <div className="panel-heading">
                            <h6 className="panel-title">
                              <a
                                data-toggle="collapse"
                                href="#collapseAssets"
                                onClick={this.handleClickCollapseAssets}
                              >
                                Assets
                              </a>
                            </h6>
                          </div>

                          <div
                            id="collapseAssets"
                            className="panel-collapse collapse"
                            style={{
                              display: this.state.showCollapseAssets
                                ? "inline"
                                : "none"
                            }}
                          >
                            <div className="panel-body">
                              <div className="panel-body">
                                {this.props.data.scan.assets.map(asset => {
                                  return (
                                    <ul>
                                      <li>Id: {asset.id}</li>
                                      <li>Name: {asset.name}</li>
                                      <li>Description: {asset.description}</li>
                                      <li>
                                        Created:{" "}
                                        {moment(asset.created).format(
                                          "Do MM YYYY"
                                        )}
                                      </li>
                                      <li>Scan Count: {asset.scanCount}</li>
                                      <li>
                                        Vulnerabilities: {this.getCount(asset)}
                                      </li>
                                      <br></br>
                                    </ul>
                                  );
                                })}
                              </div>
                            </div>

                            {/* End Assets ID Collapse */}
                            <div className="panel-group"></div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <br></br>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-group row"></div>
      </div>
    );
  }
}

export default DataInfo;
