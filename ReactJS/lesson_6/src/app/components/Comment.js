import React, { Component } from 'react'
import { Switch, Link, Route } from 'react-router-dom';

export default class Comment extends Component {
  render() {
    const { id, postId, email, name, body } = this.props;

    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/comments/${id}`}>
            {name}
          </Link>
        </div>
        <div className="card-body text-secondary">
          <p>{email}</p>
          <p>{body}</p>
          <small>Post ID: {postId}</small>
        </div>
      </div>
    )
  }
}
