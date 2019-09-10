import React, { Component } from 'react';
import { Link } from 'react-router';

export default class MenuItem extends Component {
  render() {
    return (
      <li className={this.props.active ? 'nav-item active' : 'nav-item'}>
        <Link to={this.props.href} className="nav-link">
          {this.props.children}
        </Link>
      </li>
    )
  }
}
