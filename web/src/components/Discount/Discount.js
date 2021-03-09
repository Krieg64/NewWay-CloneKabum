import React from 'react';
import PropTypes from 'prop-types';
import { DivMain, DivPorce, DivQuan } from './Discount_styled';

function CardDiscount({ colorBack1, colorBack2, sizeComponent }) {
  return (
    <DivMain size={sizeComponent}>
      <DivPorce color={colorBack1}>
        <h3>26%</h3>
        <p>DE DESCONTO</p>
      </DivPorce>
      <DivQuan color={colorBack2}>
        <h3>900</h3>
        <p>QUANTIDADE EM OFERTA</p>
      </DivQuan>
    </DivMain>
  );
}

CardDiscount.propTypes = {
  colorBack1: PropTypes.string.isRequired,
};
CardDiscount.propTypes = {
  colorBack2: PropTypes.string.isRequired,
};
CardDiscount.propTypes = {
  sizeComponent: PropTypes.string.isRequired,
};

export default CardDiscount;
