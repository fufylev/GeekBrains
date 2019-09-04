import React, { Component } from 'react';
import Post from './Post';
import AddNewPost from "./AddNewPost";

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPostFormDisplay: false,
    };
    this.addPost = this.addPost.bind(this);
    this.closePostForm = this.closePostForm.bind(this);
  }
  
  addPost(post) {
    this.props.addPost(post);
    this.closePostForm();
  }
  
  closePostForm() {
    this.setState({ newPostFormDisplay: false })
  }
  
  render() {
    const posts = this.props.posts.map((post, index) => {
      return <Post key={ index } post={ post }/>
    });
    return (
      <div>
        <button className="btn btn-blue-grey mb-5" onClick={
          () => this.setState({ newPostFormDisplay: true }) }>
          Add new post
        </button>
        { this.state.newPostFormDisplay &&
        <AddNewPost addPost={ this.addPost } closePostForm={ this.closePostForm }/> }
        { posts }
      </div>
    );
  }
}
