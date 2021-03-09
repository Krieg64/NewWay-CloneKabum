import React from 'react';
import {
  PromotionComponent, CardPromotion, PriceOld, PriceNew, TitleHomePromotion,
} from './CardHomePromotion_styled';
import { productspromotion } from '../../bank/bank';
import Discount from '../Discount/Discount';
import ButtonCart from '../ButtonCart/ButtonCart';

const handleClick = () => {
  console.log('caio');
};

const CardHomePromotion = () => (
  <>
    <TitleHomePromotion>Quinzena do consumidor</TitleHomePromotion>
    <PromotionComponent>
      {productspromotion.map((product) => (
        <CardPromotion key={product.id}>
          <img src={product.img} alt={product.title} />
          <Discount colorBack1="#000" colorBack2="#000" sizeComponent="100" />
          <h2>{product.titlepromotion}</h2>
          <PriceOld>
            De R$
            {' '}
            {product.price}
            {' '}
            POR
          </PriceOld>
          <PriceNew>
            R$
            {' '}
            {(product.price - (product.price * 0.26)).toFixed(2)}
          </PriceNew>
          <span>À VISTA NO BOLETO BANCÁRIO COM 15% DE DESCONTO</span>
          <ButtonCart colorBack1="#000" colorBack2="#FFB600" onclick={handleClick} />
        </CardPromotion>
      ))}
    </PromotionComponent>
  </>

);

export default CardHomePromotion;
