import React from 'react';
import {
  Bar, Brand, NavBar,
} from './NavBar_styled';

const Navbar = () => (
  <Bar>
    <Brand>
      <h2>TechBuild</h2>
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
