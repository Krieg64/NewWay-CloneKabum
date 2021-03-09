import styled from 'styled-components';

export const Bar = styled.div`
  width: 100%;
  height: 8vh;
  margin: 0 auto;
  display: flex;
  background-color: #F24405;
`;

export const Brand = styled.div`
  width: 20%;
  height: auto;
  padding: 0 2rem 0 2rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img{
    width: auto;
    height: 100%;
    border-radius: 5px;
  }
  h2 {
    color: #F28705;
    font-size: 2rem;
    font-family: 'Carter One', cursive; 
    margin: 0;
  }
`;

export const NavBar = styled.div`
  width: 80%
  height: auto;
  display: flex;
  justify-content: space-around;

  a{
    color: white;
    text-decoration: none;
    font-weight: 700;
    font-family: sans-serif;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  }


`;
