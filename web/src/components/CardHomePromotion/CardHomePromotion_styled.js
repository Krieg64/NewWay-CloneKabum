import styled from 'styled-components';

export const PromotionComponent = styled.div`
  width:  100%;
  height: auto;
  box-sizing: content-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  margin: auto;
`;

export const CardPromotion = styled.div`
  width: 31%;
  min-width: 180px;
  height:  auto;
  border: 1px solid black;
  border-radius: 10px;
  margin:  5px;

  img{
    width: 145px;
    padding: 2px;
    display: block;
    margin: 0 auto;
  }
  h2{
    width: 100%;
    height: 10vh;
    font-size: .8rem;
    font-family: Rubik;
    padding: 10px;
  }
  span{
    display: flex;
    width: 100%;
    height: 40px;
    font-family: Rubik;
    font-size: .7rem;
    padding: 0px 10px;
  }
`;

export const PriceOld = styled.p`
  font-family: Rubik;
  font-size: .8rem;
  padding: 0px 10px;
`;

export const PriceNew = styled.p`
  font-family: Rubik;
  font-size: 2rem;
  padding: 0px 10px;
  color: orange;
`;
