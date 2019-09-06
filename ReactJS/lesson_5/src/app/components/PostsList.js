import React, { Component } from 'react';
import axios from 'axios';

import Post from './Post';
import Loader from './Loader';
import Pagination from '../components/Pagination';

export default class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      startOfPagination: 0,
      endOfPagination: 10,
      currentPage: 1,
    };
    this.handleCurrentPage = this.handleCurrentPage.bind(this);
  }
  
  handleCurrentPage(currentPage) {
    this.setState({
      currentPage: currentPage,
      startOfPagination: ( currentPage - 1 ) * 10,
      endOfPagination: currentPage * 10,
    })
  }
  
  render() {
    if ( !this.state.posts.length ) {
      return <Loader/>;
    }
    
    const posts = this.state.posts
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
        <h1>Посты &emsp;
        
        </h1>
        <div className="d-flex justify-content-between align-items-baseline">
          <Pagination handleCurrentPage={ this.handleCurrentPage }
                      total={ this.state.posts.length }
                      currentPage={ this.state.currentPage }/>
          <span>Shown: { this.state.startOfPagination + 1 } - { this.state.endOfPagination }</span>
          <div className="page-item">
            <a className="page-link"
               onClick={() => this.setState({
                 startOfPagination: 0,
                 endOfPagination: this.state.posts.length,
                 currentPage: 0,
               })}
            >Show all</a>
          </div>
        </div>
        { posts }
        <Pagination handleCurrentPage={ this.handleCurrentPage }
                    total={ this.state.posts.length }
                    currentPage={ this.state.currentPage }/>
      </div>
    )
  }
  
  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({
          posts: response.data,
        })
      })
    
  }
}
