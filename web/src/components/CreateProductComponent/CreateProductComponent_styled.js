import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: auto;
  padding: 30px;

  h2{
    font-family: Rubik;
    display: flex;
    justify-content: center;
  }
`;

export const BoxInput = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;

  label{
    font-family: Rubik;
    font-size:  1.3rem;
    padding: 10px;
    color: rgba(0,0,0,0.6)
  }

  input{
    width: 100%;
    height: 40px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    transition: .5s linear;
  }
  input:hover{
    border-bottom: 2px solid rgba(0, 0, 0, .7);
  }
  input:focus{
    outline: none;
    border-bottom: 2px solid #F24405;
  }
`;

export const BoxTextArea = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  box-sizing: content-box;

  div{
    width: 60%;
    display: block;
    float: left;
    margin: 10px;
  }

  label{
    font-family: Rubik;
    font-size: 1.3rem; 
    color: rgba(0, 0, 0, 0.6); 
  }
  label:hover textarea{
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  textarea {
    width: 100%;
    height: 200px;
    border:1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.02);
    resize: none;
    border-radius: 4px;
  }
  textarea::placeholder {
    font-weight: 700;
    font-size: .9rem;
    padding: 12px 15px;
    color:  rgba(0, 0, 0, 0.4)
  }
  textarea:focus{
    outline-color: #F24405;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const Finally = styled.aside`
  width: 40%;
  display: flex;
  padding-top: 10px;
  position: relative;
  flex-direction:  column;
  justify-content: space-between;

  input{
    width: 100%;
    height: 40px;
    display: block;
    border: 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    transition: .5s linear;
  }
  input:hover{
    border-bottom: 2px solid rgba(0, 0, 0, 0.7)
  }
  input:focus{
    outline: 0;
    border-bottom: 2px solid #F24405;
  }
  button {
    width: 80%;
    height: 40px;
    display: block;
    margin: 20px auto;
    border-radius: 5px;
    background-color: #F24405;
    border: 0;
    font-family: Rubik;
    font-size: 1.4rem;
    font-weight: 700;
    color: white;
  }
  button:hover{
    transform: scale(1.01);
    background-color: #FF5805;
  }

`;
