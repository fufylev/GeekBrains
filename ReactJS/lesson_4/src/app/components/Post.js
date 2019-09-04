import React, { Component } from 'react';

export default class Post extends Component {
  render() {
    return (
      <div className="border p-3 mb-2">
        <h4 className="text font-weight-bold text-body mb-md-2">{ this.props.post.title }</h4>
        <p className="text blue-grey-text font-italic mb-md-2">{ this.props.post.body }</p>
        <hr/>
        <small className="text blue-text">User name: { this.props.post.userName }</small>
      </div>
    );
  }
}
