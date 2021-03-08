import styled from 'styled-components';

export const CardPromotionsComponent = styled.div`
  width: 70vw;
  height: 300px;
  background-color: black;
  display: block;
  margin: auto;
`;

export const CardImg = styled.div`
  width: 100%;
  height: inherit;
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
