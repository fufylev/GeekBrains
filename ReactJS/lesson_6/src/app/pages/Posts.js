import React, { Component } from 'react';

import { getPosts } from '../actions/actionCreators';
import PostStore from '../stores/postStore';
import AddNewPost from '../components/AddNewPost';
import PostsList from '../components/PostsList';


export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      newPostFormDisplay: false,
    };
    this.onPostChange = this.onPostChange.bind(this);
    this.closePostForm = this.closePostForm.bind(this);
  }
  
  onPostChange() {
    const posts = PostStore.posts;
    this.setState({ posts })
  }
  closePostForm() {
    this.setState({ newPostFormDisplay: false })
  }

  render() {
    return (
      <div>
        <button className="btn btn-blue-grey mb-5" 
        onClick={() => this.setState({ newPostFormDisplay: true })}>
          Add new post
        </button>
        { this.state.newPostFormDisplay &&
        <AddNewPost closePostForm={ this.closePostForm }/> }
        <PostsList posts={this.state.posts} />
      </div>
    );
  }
  
  componentDidMount() {
    getPosts();
    PostStore.on('change', this.onPostChange);
  }

  componentWillUnmount() {
    PostStore.removeListener('change',this.onPostChange)
  }
}
