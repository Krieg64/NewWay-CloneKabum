import styled from 'styled-components';

export const Divmain = styled.div`
  width: 20%;
  min-width: 155px;
  height: auto;
  display: block;
  background-color: rgba(230, 230, 230);

  .names_products{
    padding: 4px 5px;
  }
  h2{
    font-family: Rubik;
    color: white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F24405;
    transform: scale(1.05) translateY(1px);
  }
  i{
    color: black;
    cursor: pointer;
  }
  a{
    color: black;
    font-family: Rubik;
    font-size: 1rem;
    text-decoration: none;
    padding:2px;
  }
`;

export const BoxName = styled.div`
    width:  100%;
    height:  auto;
    padding: 15px 0;
`;
