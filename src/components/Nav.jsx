import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import {Link} from 'react-router-dom';
import s from '../styles/Nav.module.css'


function Nav({onSearch}) {
  return (
    <nav className={s.container}>
        <span>
          <Link className={s.link} to='/'> Weather App</Link>
        </span>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
