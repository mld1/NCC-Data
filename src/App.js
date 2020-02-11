import React from "react";
import "./App.css";
import ThreatData from "./data/threatData.json";
import Header from "./components/Header.js";
import DataInfo from "./components/DataInfo.js";
import UserInfo from "./components/UserInfo.js";

class App extends React.Component {
  state = {
    data: ThreatData
  };

  render() {
    return (
      <div className="App">
        <Header />
        <UserInfo data={this.state.data} key={1} />
        <DataInfo data={this.state.data} key={2} />
      </div>
    );
  }
}

export default App;
