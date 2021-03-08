import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const DivMain = styled.div`
  width: ${(props) => props.size}%;
  height: 10vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const DivPorce = styled.div`
  width: 55%;
  height: 100%;
  background-color: ${(props) => props.color};
  color: white;
  padding: 5px;
  margin: 0;

  h3 {
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: clamp(.65rem, 1vw, 1.2rem);
    font-family: sans-serif;
    font-weight: 800;
    margin: 0;
    padding: 0;
  }
`;
const DivQuan = styled.div`
  width: 45%;
  height: 100%;
  color: white;
  background-color: ${(props) => props.color};
  padding: 5px;
  margin: 0;

  h3 {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: clamp(.6rem, 1vw, 1.2rem);
    font-family: sans-serif;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
`;

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
