import React, { Component } from 'react';

import User from './User';
import Loader from './Loader';
import Pagination from '../components/Pagination';
import ShownItems from './ShownItems';
import ShowAllItems from './ShowAllItems';

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startOfPagination: 0,
      endOfPagination: 5,
      currentPage: 1,
      itemsPerPage: 5,
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
      endOfPagination: this.props.users.length,
      currentPage: 0,
    })
  }
  
  render() {
    if ( !this.props.users.length ) {
      return <Loader/>;
    }
    const totalItems = this.props.users.length;
    
    const selectedUsers = this.props.users
      .filter((el, idx) => {
        return (
          idx >= this.state.startOfPagination
          && idx < this.state.endOfPagination )
      })
      .map((user, idx) => {
        return <User key={ idx } { ...user } />
      });
    
    return (
      <div>
        <h1>Users</h1>
        <div className='d-flex justify-content-between align-items-baseline'>
          <Pagination handleCurrentPage={ this.handleCurrentPage } { ...this.state }
                      totalItems={ totalItems }
                      pagesCount = {Math.ceil(totalItems / this.state.itemsPerPage)}/>
          <ShownItems { ...this.state }/>
          <ShowAllItems showAll={ this.showAll }/>
        </div>
        { selectedUsers }
        <div className='d-flex justify-content-between align-items-baseline'>
          <Pagination handleCurrentPage={ this.handleCurrentPage } { ...this.state }
                      totalItems={ totalItems }
                      pagesCount = {Math.ceil(totalItems / this.state.itemsPerPage)}/>
          <ShownItems { ...this.state }/>
          <ShowAllItems showAll={ this.showAll }/>
        </div>
      </div>
    )
  }
}
