import React from 'react';

import MenuItem from './MenuItem';


export default class Menu extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return <MenuItem key={index} href={item.href}>
        {item.title}
      </MenuItem>;
    });
    
    return <div>
      <h1>{this.props.titleMenu}</h1>
      <ul className="d-flex">
        {items}
      </ul>
    </div>
  }
}
