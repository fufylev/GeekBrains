import React, { Component } from 'react';
import axios from 'axios';

import Comment from './Comment';
import Loader from './Loader';

export default class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  render() {
    if (!this.state.comments.length) {
      return <Loader />;
    }

    const comments = this.state.comments.map((comment) => {
      return <Comment key={comment.id} {...comment} />
    });

    return (
      <div>
        <h1>Комментарии</h1>
        {comments}
      </div >
    )
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/comments')
      .then(response => {
        this.setState({ comments: response.data })
      })
  }
}
