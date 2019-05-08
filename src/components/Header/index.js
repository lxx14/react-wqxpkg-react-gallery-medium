import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = () => {
  return(
    <div id="header" className='container'>
      <ul className='navi'>
      <li><NavLink exact to='/'>home</NavLink></li>
      <li><NavLink to='/gallery'>gallery</NavLink></li>
      </ul>
    </div>
  )
}

export default Header;