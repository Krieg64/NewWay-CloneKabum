import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBuy, Cart, CardButton } from './ButtonCart_styled';

const ButtonCart = ({ onclick, colorBack1, colorBack2 }) => (
  <CardButton>
    <Cart color={colorBack1} type="button">
      {' '}
      <i className="fas fa-shopping-cart" />
    </Cart>
    <ButtonBuy color={colorBack2} type="button" onClick={onclick}>texto</ButtonBuy>
  </CardButton>
);
ButtonCart.propTypes = {
  onclick: PropTypes.func.isRequired,
};
ButtonCart.propTypes = {
  colorBack1: PropTypes.string.isRequired,
};
ButtonCart.propTypes = {
  colorBack2: PropTypes.string.isRequired,
};

export default ButtonCart;
