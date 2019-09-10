import React, { Component } from 'react';

import Post from './Post';
import Loader from './Loader';
import Pagination from '../components/Pagination';
import ShownItems from "./ShownItems";
import ShowAllItems from "./ShowAllItems";

export default class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startOfPagination: 0,
      endOfPagination: 10,
      currentPage: 1,
      itemsPerPage: 10,
    };
    this.handleCurrentPage = this.handleCurrentPage.bind(this);
    this.showAll = this.showAll.bind(this);
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if ( prevState.items !== nextProps.items ) {
      return { items: nextProps.items }
    }
    return null;
  }
  
  handleCurrentPage(currentPage) {
    this.setState({
      currentPage,
      startOfPagination: ( currentPage - 1 ) * this.state.itemsPerPage,
      endOfPagination: currentPage * this.state.itemsPerPage,
    })
  }
  
  showAll() {
    this.setState({
      startOfPagination: 0,
      endOfPagination: this.props.posts.length,
      currentPage: 0,
    })
  }
  
  render() {
    if ( !this.props.posts.length ) {
      return <Loader/>;
    }
    const totalItems = this.props.posts.length;
    
    const selectedPosts = this.props.posts
      .filter((el, idx) => {
        return (
          idx >= this.state.startOfPagination
          && idx < this.state.endOfPagination )
      })
      .map((post, idx) => {
        return <Post key={ idx } { ...post } />
      });
    
    return (
      <div>
        <h1>Posts</h1>
        <div className="d-flex justify-content-between align-items-baseline">
          <Pagination handleCurrentPage={ this.handleCurrentPage } { ...this.state} totalItems={totalItems}/>
          <ShownItems { ...this.state }/>
          <ShowAllItems showAll={this.showAll}/>
        </div>
        { selectedPosts }
        <div className="d-flex justify-content-between align-items-baseline">
          <Pagination handleCurrentPage={ this.handleCurrentPage } { ...this.state} totalItems={totalItems}/>
          <ShownItems { ...this.state }/>
          <ShowAllItems showAll={this.showAll}/>
        </div>
      </div>
    )
  }
}
