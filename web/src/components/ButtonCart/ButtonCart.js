import React from 'react';
import PropTypes from 'prop-types';
import { ButtonBuy, Cart, CardButton } from './ButtonCart_styled';

const ButtonCart = ({ primary }) => (
  <CardButton>
    <Cart type="button">
      {' '}
      <i className="fas fa-shopping-cart" />
    </Cart>
    <ButtonBuy type="button" onClick={primary.bind}>texto</ButtonBuy>
  </CardButton>
);

ButtonCart.propTypes = {
  primary: PropTypes.string.isRequired,
};

export default ButtonCart;
