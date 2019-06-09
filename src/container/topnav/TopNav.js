import React, { Component } from "react";
import TopView from "component/TopView";

class TopNav extends Component {
  render() {
    return (
      <div>
        <TopView where="" what="Home" />
        <TopView where="News" what="News" />
        <TopView where="Contact" what="Contact" />
        <TopView where="About" what="About" />
      </div>
    );
  }
}

export default TopNav;
