import React, { Component } from "react";
import NavbarHome from "./components/navbar/navbar";
import Footer from "./components/layout/footer/footer";
import { Container } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("https://yntrwx-4000.csb.app/home")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentDidMount() {
    // Use componentDidMount instead of componentWillMount
    this.callAPI();
  }

  render() {
    // Added missing parenthesis here
    return (
      <div
        className="App"
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <NavbarHome />
        <div style={{ flex: 1, backgroundColor: "#ffe6d0" }}>
          <p className="App-intro">;{this.state.apiResponse}</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
