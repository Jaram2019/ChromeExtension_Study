import React, { Component } from "react";
import { Link } from "react-router-dom";
class TopView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      where: this.props.where,
      what: this.props.what
    };
  }
  render() {
    return (
      <Link to={this.state.where} class="tablink">
        {this.state.what}
      </Link>
    );
  }
}

export default TopView;
