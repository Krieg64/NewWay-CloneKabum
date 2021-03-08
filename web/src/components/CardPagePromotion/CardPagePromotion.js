import React from 'react';
import { products } from '../../bank/bank';
import {
  CardPromotion, CardPromotionImg, CardPromotionTitle, CardPromotionPrice, CardPromotionCard,
  CardPriceCard, CardPrice,
} from './CardPagePromotion_styled';

import CardDiscount from '../Discount/Discount';

const Card = () => (
  <CardPromotion>
    {products.map((product) => (
      <CardPromotionCard key={product.id}>
        <CardPromotionImg>
          <img src={product.img} alt={product.title} />
        </CardPromotionImg>
        <CardPromotionTitle>
          <h2>{product.title}</h2>
          <CardDiscount colorBack1="#0E7FA6" colorBack2="#38C7BD" sizeComponent="70" />
        </CardPromotionTitle>
        <CardPromotionPrice>
          <CardPriceCard>
            <strong>
              R$
              {(product.price * 1.5).toFixed(2)}
            </strong>
          </CardPriceCard>
          <CardPrice>
            <strong>
              R$
              {product.price}
            </strong>
            <p>VALOR À VISTA NO BOLETO OU PIX</p>
          </CardPrice>
        </CardPromotionPrice>
      </CardPromotionCard>
    ))}
    <hr />
  </CardPromotion>
);

export default Card;
