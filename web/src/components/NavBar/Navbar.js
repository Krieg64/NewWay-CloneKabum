import React from 'react';
import {
  Bar, Brand, NavSearchLogin, NavSearch, NavLogin, NavBar,
} from './NavBar_styled';
import logo from '../../files/logo2.png';
// import searchIcon from '../../files/search_icon.png';
/* <img src={searchIcon} alt="search-icon" /> */

const Navbar = () => (
  <Bar>
    <Brand>
      <img src={logo} alt="NewWay" />
    </Brand>
    <div>
      <NavSearchLogin>
        <NavSearch>
          <input type="search" placeholder="Buscar" />
          <button type="submit">
            {' '}
            <i className="fas fa-search" />
          </button>

        </NavSearch>
        <NavLogin>
          <a href="/h">
            {' '}
            <i className="fas fa-shopping-cart" />
          </a>
          <a href="/h">
            <i className="fas fa-user" />
            Login / Cadastre-se
          </a>
        </NavLogin>
      </NavSearchLogin>
      <NavBar>
        <ul>
          <li>Hardware</li>
          <li>Gamer</li>
          <li>Quem somos</li>
          <li>Políticas do site</li>
          <li>Fale Conosco</li>
          <li>Faq</li>
        </ul>
      </NavBar>
    </div>
  </Bar>
);

export default Navbar;
