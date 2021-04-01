import React from 'react';
import { Link } from 'react-router-dom';
import {
  Bar, Brand, NavSearchLogin, NavSearch, NavLogin, NavBar, DropDown,
} from './NavBar_styled';
import logo from '../../files/logo2.png';
import { productHar } from '../../bank/bank';

const Navbar = () => (
  <Bar>
    <Brand>
      <Link to="/">
        <img src={logo} alt="NewWay" />
      </Link>
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
          <li>
            Hardware
            {productHar.map((prod) => (
              <DropDown>
                {prod.id === 1 ? prod.subname.map((name) => <li key={name.id}>{name.name}</li>) : ''}
              </DropDown>
            ))}

          </li>
          <li>
            Gamer
            {productHar.map((prod) => (
              <DropDown>
                {prod.id === 2 ? prod.subname.map((name) => <li key={name.id}>{name.name}</li>) : ''}
              </DropDown>
            ))}
          </li>
          <li>Quem Somos</li>
          <li>Políticas do site</li>
          <li>Fale Conosco</li>
          <li>Faq</li>
          <li><Link to="/adm">Cadastrar</Link></li>
        </ul>
      </NavBar>
    </div>
  </Bar>
);
export default Navbar;
