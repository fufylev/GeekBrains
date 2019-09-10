import React, { Component } from 'react'
import axios from 'axios';

import CommentProfile from '../components/Comment';
import Loader from "../components/Loader";

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null
    };
  }

  render() {
    return (
      <div>
        {this.state.comment ? <CommentProfile {...this.state.comment} /> : <Loader />}
      </div>
    )
  }

  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/comments/${this.props.match.params.commentId}`)
      .then(response => {
        const comment = response.data;
        this.setState({ comment })
      })
  }
}
