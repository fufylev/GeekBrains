import React, { Component } from 'react'
import axios from 'axios';

import PostProfile from '../components/Post';
import Loader from "../components/Loader";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }
  
  render() {
    return (
      <div>
        {this.state.post ? <PostProfile {...this.state.post} /> : <Loader />}
      </div>
    )
  }
  
  componentDidMount() {
    axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.match.params.postId}`)
      .then(response => {
        const post = response.data;
        this.setState({ post })
      })
  }
}
