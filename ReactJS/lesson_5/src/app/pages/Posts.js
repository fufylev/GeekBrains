import React, { Component } from 'react';
import PostsList from '../components/PostsList';

export default class Posts extends Component {
  render() {
    return (
      <div>
        {
          (!this.props.children) ?
            (<PostsList />)
            :
            (this.props.children)
        }
      </div>
    );
  }
}
