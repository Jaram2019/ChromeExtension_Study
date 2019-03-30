import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MainContainer from "container/main/MainContainer";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Route path="/" component={MainContainer} />
      </BrowserRouter>
    );
  }
}

export default App;
