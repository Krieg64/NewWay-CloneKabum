import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  PromotionComponent, CardPromotion, PriceNew, TitleHome,
} from './CardHome_styled';
import ButtonCart from '../ButtonCart/ButtonCart';

const handleClick = () => {
  console.log('caio');
};

const CardHomePromotion = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8004/view').then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <TitleHome>Ofertas da semana</TitleHome>
      <PromotionComponent>
        {products.filter((productList) => (!!productList.images.length)).map((product) => (
          <CardPromotion key={product._id}>
            <img src={`http://localhost:8004/files/${product.images[0].filename}`} alt={product.title} />
            <h2>{product.titlePromotion}</h2>
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
};

export default CardHomePromotion;
