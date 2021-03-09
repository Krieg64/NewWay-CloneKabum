import styled from 'styled-components';

export const DivMain = styled.div`
  width: ${(props) => props.size}%;
  height: 10vh;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

export const DivPorce = styled.div`
  width: 55%;
  height: 100%;
  background-color: ${(props) => props.color};
  color: white;
  padding: 5px;
  margin: 0;

  h3 {
    font-size: 2rem;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: clamp(.65rem, 1vw, 1.2rem);
    font-family: sans-serif;
    font-weight: 800;
    margin: 0;
    padding: 0;
  }
`;
export const DivQuan = styled.div`
  width: 45%;
  height: 100%;
  color: white;
  background-color: ${(props) => props.color};
  padding: 5px;
  margin: 0;

  h3 {
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
  }
  p {
    font-size: clamp(.6rem, 1vw, 1.2rem);
    font-family: sans-serif;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
`;
