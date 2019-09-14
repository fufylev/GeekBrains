import React, { Component } from 'react';

export default class ShowAllItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="nav-item text-primary font-weight-bold">
        <a className="nav-link active" onClick={() => this.props.showAll()}>Show all</a>
      </div>
    );
  }
}
