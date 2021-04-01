import React from 'react';
// import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import { Main, Teste } from './styled.global/App.styled';
import Footer from './components/Footer/Footer';
import BodyComponent from './components/BodyComponent/BodyComponent';

const App = () => (
  <Teste>
    <Router>
      <Navbar />
      <Main>
        <BodyComponent />
      </Main>
      <Footer />
    </Router>
  </Teste>
);

export default App;
