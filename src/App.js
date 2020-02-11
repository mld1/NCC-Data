import React from "react";
import "./App.css";
import ThreatData from "./data/threatData.json";
import Header from "./components/Header.js";
import DataInfo from "./components/DataInfo.js";

class App extends React.Component {
  state = {
    data: ThreatData
  };

  render() {
    return (
      <div className="App">
        <Header />
        <h3>{this.state.data.user.displayName}</h3>
        <DataInfo data={this.state.data} />
      </div>
    );
  }
}

export default App;
