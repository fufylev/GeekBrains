import React from 'react';
import PropTypes from 'prop-types';

export default class MenuItem extends React.Component {
  render() {
    return <li className="mr-5"><a href={this.props.href}>{this.props.children}</a></li>
  }
}

MenuItem.defaultProps = {
  children: "Главная (страница по умолчанию)",
  href: "/"
};

MenuItem.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};
