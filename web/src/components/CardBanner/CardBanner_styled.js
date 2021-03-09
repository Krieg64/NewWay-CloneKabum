import styled from 'styled-components';

export const CardPromotionsComponent = styled.div`
  width: 70vw;
  height: 300px;
  display: block;
  margin: auto;
  padding: 10px 0;
`;

export const CardImg = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  

  img{
    width: 100%;
    height: inherit;
    object-fit: cover;
    position: absolute;
    opacity: 0;
    transition: 3s;
  }

  img.selected {
    opacity: 1;
  }
`;
