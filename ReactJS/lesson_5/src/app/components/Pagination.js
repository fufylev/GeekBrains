import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPosts: this.props.total,
      currentPage: this.props.currentPage,
      postsPerPage: 10,
      pagesCount: 0,
      pages: [],
    };
    this.paginationActionHandler = this.paginationActionHandler.bind(this);
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if ( prevState.currentPage !== nextProps.currentPage ) {
      return { currentPage: nextProps.currentPage }
    }
    return null;
  }
  
  paginationActionHandler(action) {
    const currentPage = this.state.currentPage + action;
    if ( currentPage <= 0 ) {
      this.props.handleCurrentPage(this.state.pagesCount);
    } else if ( currentPage > this.state.pagesCount ) {
      this.props.handleCurrentPage(1);
    } else {
      this.props.handleCurrentPage(currentPage);
    }
  }
  
  render() {
    const pages = this.state.pages.map(el => {
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
  
  componentDidMount() {
    const pagesCount = Math.ceil(this.state.totalPosts / this.state.postsPerPage);
    const pages = [];
    for ( let i = 1; i <= pagesCount; i++ ) {
      pages.push(i)
    }
    this.setState({
      pages: pages,
      pagesCount,
    });
    
  }
}

export default Pagination;
