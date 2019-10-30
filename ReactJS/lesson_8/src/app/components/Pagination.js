import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalItems: this.props.totalItems,
      currentPage: this.props.currentPage,
      itemsPerPage: this.props.itemsPerPage,
      pagesCount: this.props.pagesCount,
      pages: [],
    };
    this.paginationActionHandler = this.paginationActionHandler.bind(this);
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if ( prevState.currentPage !== nextProps.currentPage ) {
      return {
        currentPage: nextProps.currentPage,
      }
    }
    return null;
  }
  
  paginationActionHandler(action) {
    const currentPage = this.state.currentPage + action;
    if ( currentPage <= 0 ) {
      this.props.handleCurrentPage(this.props.pagesCount);
    } else if ( currentPage > this.props.pagesCount ) {
      this.props.handleCurrentPage(1);
    } else {
      this.props.handleCurrentPage(currentPage);
    }
  }
  
  render() {
    let pages = [];
    for ( let i = 1; i <= this.props.pagesCount; i++ ) {pages.push(i)}
    pages = pages.map(el => {
      return (
        <li key={ el } className={ el === this.state.currentPage ? 'page-item active' : 'page-item' }>
          <a className="page-link" onClick={ () => this.props.handleCurrentPage(el) }>{ el }
            { el === this.state.currentPage && <span className="sr-only">(current)</span> }
          </a>
        </li>
      )
    });
    
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination pg-blue text-center">
          <li className="page-item ">
            <a className="page-link" onClick={ () => this.paginationActionHandler(-1) }>Prev</a>
          </li>
          { pages }
          <li className="page-item ">
            <a className="page-link" onClick={ () => this.paginationActionHandler(1) }>Next</a>
          </li>
        </ul>
      </nav>
    );
    
  }
}

export default Pagination;
