import React, { Component } from 'react';

export default class ShownItems extends Component {
  render() {
    return (
      <React.Fragment>
        <span>Shown: { this.props.startOfPagination + 1 } - { this.props.endOfPagination }</span>
      </React.Fragment>
    );
  }
}
