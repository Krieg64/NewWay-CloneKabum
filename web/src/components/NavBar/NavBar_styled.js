import styled from 'styled-components';

export const Bar = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  background-color: #F24405;
`;

export const Brand = styled.div`
  width: 30vw;
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

export const NavSearchLogin = styled.div`
  width: 70vw;
  height: 10vh;
  display: flex;
`;
export const NavSearch = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 10px 8%;
  border-radius: 2px;
  input{
    width: 100%;
    border: none;
    padding: 0 10px;
    line-height: normal;
  }
  input::placeholder{
    font-family:  Rubik;
    font-size: 1rem;
    text-align: start;
    letter-spacing: 1.5px;
  }
  button{
    width: 45px;
    height: inherit;
    padding: 8px;
    background-color: white;
    border: none;
  }
`;
export const NavLogin = styled.div`
  width: 30vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  a{
    color: white;
    text-decoration: none;
    padding: 4px;
    font-family: Rubik;
    font-size: 1rem;
  }
  i{
    padding: 5px;
  }
  `;
export const NavBar = styled.div`
  width: 100%;
  display: flex;
  ul{
    display: flex;
    padding: 5px 0;
    box-sizing: content-box;
    border-top: 2px solid rgba(35, 35, 38, 0.3);
  }
  li{
    color: white;
    font-family: Rubik;
    font-size: 1rem;
    padding: 4px 10px;
    list-style: none;
  }
`;
