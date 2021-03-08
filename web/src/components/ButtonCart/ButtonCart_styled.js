import styled from 'styled-components';

export const CardButton = styled.div`
  display: flex;
  box-sizing: content-box;
  justify-content: center;
  padding-bottom: 15px;

  button{
    font-size: 1rem;
    color: white;
    font-family: Rubik;
    cursor: pointer;
  }
  button:focus:not(:focus-visible) {
    outline: none;
  }
  button:focus:not(:-moz-focusring) {
    outline: none;
  }
`;

export const Cart = styled.button`
  width: 40px;
  padding: 5px;
  margin: 0;
  border: 0;
  background-color: black;
  border-radius: 5px 0 0 5px;
`;
export const ButtonBuy = styled.button`
  width: 120px;
  height: 40px;
  padding: 5px;
  margin: 0;
  border: 0;
  background-color: orange;
  border-radius: 0 5px 5px 0;
`;
