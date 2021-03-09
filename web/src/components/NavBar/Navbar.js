import React from 'react';
import {
  Bar, Brand, NavBar,
} from './NavBar_styled';
import logo from '../../files/logo2.png';

const Navbar = () => (
  <Bar>
    <Brand>
      <img src={logo} alt="NewWay" />
    </Brand>
    <NavBar>
      <a href="/">Meus Pedidos</a>
      <a href="/t">Minha Conta</a>
      <a href="/d">Faça login</a>
      <a href="/g">Meu Carrinho</a>
    </NavBar>
  </Bar>
);

export default Navbar;
