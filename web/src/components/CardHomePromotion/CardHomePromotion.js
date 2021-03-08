import React from 'react';
import {
  PromotionComponent, CardPromotion, PriceOld, PriceNew,
} from './CardHomePromotion_styled';
import { products } from '../../bank/bank';
import Discount from '../Discount/Discount';
import ButtonCart from '../ButtonCart/ButtonCart';

function handleClick() {
  console.log('teste');
}

const CardHomePromotion = () => (
  <PromotionComponent>
    {products.map((product) => (
      <CardPromotion key={product.id}>
        <img src={product.img} alt={product.title} />
        <Discount colorBack1="#000" colorBack2="#000" sizeComponent="100" />
        <h2>{product.titlepromotion}</h2>
        <PriceOld>
          De R$
          {' '}
          {(product.price * 1.15).toFixed(2)}
          {' '}
          POR
        </PriceOld>
        <PriceNew>
          R$
          {' '}
          {product.price}
        </PriceNew>
        <span>À VISTA NO BOLETO BANCÁRIO COM 15% DE DESCONTO</span>
        <ButtonCart primary={handleClick.bind} />
      </CardPromotion>
    ))}
  </PromotionComponent>
);

export default CardHomePromotion;
