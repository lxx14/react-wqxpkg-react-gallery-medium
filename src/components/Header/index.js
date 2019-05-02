import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <div id="header">
      <ul>
      <li><NavLink to='/'>home</NavLink></li>
      <li><NavLink to='/gallery'>gallery</NavLink></li>
      </ul>
    </div>
  )
}

export default Header;