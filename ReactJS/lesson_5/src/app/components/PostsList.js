import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post';
import Loader from './Loader';
import Pagination from '../components/Pagination';
import ShownPosts from "./ShownPosts";
import ShowAllPosts from "./ShowAllPosts";

export default class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      startOfPagination: 0,
      endOfPagination: 10,
      currentPage: 1,
      postsPerPage: 10,
      totalPosts: 0,
    };
    this.handleCurrentPage = this.handleCurrentPage.bind(this);
    this.showAllPosts = this.showAllPosts.bind(this);
  }
  
  handleCurrentPage(currentPage) {
    this.setState({
      currentPage,
      startOfPagination: ( currentPage - 1 ) * 10,
      endOfPagination: currentPage * 10,
    })
  }
  
  showAllPosts() {
    this.setState({
      startOfPagination: 0,
      endOfPagination: this.state.totalPosts,
      currentPage: 0,
    })
  }
  
  render() {
    if ( !this.state.posts.length ) {
      return <Loader/>;
    }
    const {posts, ...data} = this.state;
    const selectedPosts = this.state.posts
      .filter((el, idx) => {
        return (
          idx >= this.state.startOfPagination
          && idx < this.state.endOfPagination )
      })
      .map((post) => {
        return <Post key={ post.id } { ...post } />
      });
    
    return (
      <div>
        <h1>Посты</h1>
        <div className="d-flex justify-content-between align-items-baseline">
          <Pagination handleCurrentPage={ this.handleCurrentPage } { ...data }/>
          <ShownPosts { ...data }/>
          <ShowAllPosts showAllPosts={this.showAllPosts}/>
        </div>
        { selectedPosts }
        <div className="d-flex justify-content-between align-items-baseline">
          <Pagination handleCurrentPage={ this.handleCurrentPage } { ...data }/>
          <ShownPosts { ...data }/>
          <ShowAllPosts showAllPosts={this.showAllPosts}/>
        </div>
      </div>
    )
  }
  
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          posts: response.data,
          totalPosts: response.data.length,
        })
      })
    
  }
}
