import React, { Component } from 'react';

import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.brand = '';
    this.menu = [
      {
        name: 'Home',
        href: '/'
      },
      {
        name: 'Users',
        href: '/users'
      },
      {
        name: 'Posts',
        href: '/posts'
      },
      {
        name: 'Comments',
        href: '/comments'
      },
    ];
    this.state = {
      pathname: window.location.pathname,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if ( prevState.pathname !== nextProps.pathname ) {
      return {
        pathname: nextProps.pathname,
      }
    }
    return null;
  }
  
  render() {
    const menuItem = this.menu.map((link, idx) => {
      return (
        <li key={idx} className={ link.href === window.location.pathname ? 'nav-item active' : 'nav-item' }>
          <Link to={ link.href } className="nav-link" onClick={() => this.setState({pathname: link.href})}>
            {link.name} {link.href === window.location.pathname && <span className="sr-only">(current)</span>}
          </Link>
        </li>
      )
    });
    
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark primary-color mb-3">
          <div className="collapse navbar-collapse container" id="navbarNav">
            <Link to="/" className="navbar-brand" onClick={() => this.setState({pathname: '/'})}>React blog</Link>
            <ul className="navbar-nav">
              {menuItem}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
