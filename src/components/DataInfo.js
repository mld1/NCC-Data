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

  render() {
    return (
      <div className="margin">
        <br></br>
        {/* Collapse for Scan Results */}
        <div class="panel-group">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-title">
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
              class="panel-collapse collapse"
              style={{
                display: this.state.showCollapseScan ? "inline" : "none"
              }}
            >
              <ProgressBar data={this.props.data} />
              <div className="panel-body">
                <div className="card">
                  <ul className="list-group list-group-flush">
                    {/* Collapse Scanners */}
                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <h6 class="panel-title">
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
                        class="panel-collapse collapse"
                        style={{
                          display: this.state.showCollapseScanners
                            ? "inline"
                            : "none"
                        }}
                      >
                        <div class="panel-body">
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
                    <div class="panel panel-default">
                      <div class="panel-heading">
                        <h6 class="panel-title">
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
                        class="panel-collapse collapse"
                        style={{
                          display: this.state.showCollapseAssetsSeverityLists
                            ? "inline"
                            : "none"
                        }}
                      >
                        <div class="panel-body">
                          <li className="list-group-item">
                            <ul>
                              <li>
                                {" "}
                                critical:{" "}
                                {this.props.data.scan.severityCounts.critical}
                              </li>
                              <br></br>
                              <li>
                                {" "}
                                high: {this.props.data.scan.severityCounts.high}
                              </li>
                              <br></br>
                              <li>
                                {" "}
                                medium:{" "}
                                {this.props.data.scan.severityCounts.medium}
                              </li>
                              <br></br>
                              <li>
                                low: {this.props.data.scan.severityCounts.low}
                              </li>
                              <br></br>
                              <li>
                                information:{" "}
                                {
                                  this.props.data.scan.severityCounts
                                    .information
                                }
                              </li>
                            </ul>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>{" "}
                {/* Assests Collapse */}
                <div class="panel-group">
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <a
                          data-toggle="collapse"
                          href="#collapseAssets"
                          onClick={this.handleClickCollapseAssets}
                        >
                          Assets
                        </a>
                      </h4>
                    </div>

                    <div
                      id="collapseAssets"
                      class="panel-collapse collapse"
                      style={{
                        display: this.state.showCollapseAssets
                          ? "inline"
                          : "none"
                      }}
                    >
                      <div class="panel-body">
                        <div class="panel-body">
                          {this.props.data.scan.assets.map(asset => {
                            return (
                              <ul>
                                <li>Id: {asset.id}</li>
                                <li>Name: {asset.name}</li>
                                <li>Description: {asset.description}</li>
                                <li>
                                  Created:{" "}
                                  {moment(asset.created).format("Do MM YYYY")}
                                </li>
                                <li>Scan Count: {asset.scanCount}</li>
                              </ul>
                            );
                          })}
                        </div>
                      </div>

                      {/* End Assets ID Collapse */}
                      <div class="panel-group"></div>
                    </div>
                  </div>
                </div>
                <br></br>
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
