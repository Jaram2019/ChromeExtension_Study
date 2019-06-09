import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainContainer from "container/main/MainContainer";
import TopNav from "container/topnav/TopNav";
import NewsContainer from "container/news/NewsContainer";
import ContactContainer from "container/contact/ContactContainer";
import AboutContainer from "container/About/AboutContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    };
    this.handleTab = this.handleTab.bind(this);
  }

  handleTab(where) {
    this.setState({
      tab: where
    });
  }

  render() {
    return (
      <>
        <BrowserRouter basename="/">
          <TopNav handleTab={this.handleTab} />
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/News" component={NewsContainer} />
            <Route exact path="/Contact" component={ContactContainer} />
            <Route exact path="/About" component={AboutContainer} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
