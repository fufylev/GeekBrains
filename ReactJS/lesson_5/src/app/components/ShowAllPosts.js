import React, { Component } from 'react';

export default class ShowAllPosts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav-item text-primary font-weight-bold">
        <a className="nav-link active" onClick={() => this.props.showAllPosts()}>Show all</a>
      </div>
    );
  }
}
