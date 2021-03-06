import styled from 'styled-components';

export const PromotionComponent = styled.div`
  width:  100%;
  height: auto;
  box-sizing: content-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5px;
  margin: auto;
`;

export const TitleHome = styled.h2`
  width: 100%;
  font-family: Rubik;
  color: #2EA6A6;
  padding-left: 20px;
  padding-top:  10px;
`;

export const CardPromotion = styled.div`
  width: 31%;
  min-width: 180px;
  height:  auto;
  border: 1px solid rgba(46, 166, 166, 0.3);
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
    color: #2EA6A6;
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
  color: #2EA6A6;
`;
