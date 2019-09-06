import React, { Component } from 'react'
import { Link } from 'react-router';

export default class Post extends Component {
  render() {
    const { userId, id, title, body } = this.props;
    
    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">
          <Link to={`/posts/${id}`}>
            {id}. {title}
          </Link>
        
        </div>
        <div className="card-body text-secondary">
          <p className="mb-3">{body}</p>
          <small>User: {userId}</small>
        </div>
      </div>
    )
  }
}
