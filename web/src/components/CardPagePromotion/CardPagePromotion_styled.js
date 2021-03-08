import styled from 'styled-components';

export const CardPromotion = styled.div`
 width: 100%;
 height: auto;
 font-family: sans-serif;
 margin: 0 auto;
 padding: 10px;
`;

export const CardPromotionCard = styled.div`
  display: flex;
  padding: 4px;
`;

export const CardPromotionImg = styled.div`
  width: 20%;
  height: auto;

  img {
    width: 100%;
  }

`;
export const CardPromotionTitle = styled.div`
  width: 60%;
  
  
  h2 {
    color: #11487D;
    font-size: 1.2rem;
    padding: 15px;
    padding: 2px;
    margin: 0;
  }

`;

export const CardPromotionPrice = styled.div`
  width: 25%;
  background-color: #70D6BC;
  padding: 1rem;
`;

export const CardPriceCard = styled.div`
  width: 80%;
  height: auto;
  border: 1px solid rgba(0, 23,71, 0.25);
  border-radius: 10px;
  margin: 0 auto;
  padding: 0;

  strong {
    font-size: 1.3rem;
    color: rgba(56, 170, 189);
    text-decoration: line-through;
    padding: 0;
    display: flex;
    justify-content: center;
  }`;

export const CardPrice = styled.div`
  width: 80%;
  height: auto;
  margin: 0 auto;
  padding: 0;

  strong {
    font-size: 2.2rem;
    color: #0E7FA6;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  p{
    color: #11487D;
    font-weight: 500;
  }
  `;
