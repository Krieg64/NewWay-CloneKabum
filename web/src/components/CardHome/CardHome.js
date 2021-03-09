import React from 'react';
import {
  PromotionComponent, CardPromotion, PriceNew, TitleHome,
} from './CardHome_styled';
import { products } from '../../bank/bank';
import ButtonCart from '../ButtonCart/ButtonCart';

const handleClick = () => {
  console.log('caio');
};

const CardHomePromotion = () => (
  <>
    <TitleHome>Ofertas da semana</TitleHome>
    <PromotionComponent>
      {products.map((product) => (
        <CardPromotion key={product.id}>
          <img src={product.img} alt={product.title} />
          <h2>{product.titlepromotion}</h2>
          <PriceNew>
            R$
            {' '}
            {product.price}
          </PriceNew>
          <span>À VISTA NO BOLETO BANCÁRIO COM 15% DE DESCONTO</span>
          <ButtonCart colorBack1="#000" colorBack2="#F24405" onclick={handleClick} />
        </CardPromotion>
      ))}
    </PromotionComponent>
  </>
);

export default CardHomePromotion;
