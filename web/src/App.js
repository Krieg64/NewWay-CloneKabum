import React from 'react';
// import styled from 'styled-components';
import Navbar from './components/NavBar/Navbar';
// import Card from './components/Card/Card';
import { Main, Teste } from './styled.global/App.styled';
import BodyComponent from './components/BodyComponent/BodyComponent';
import CardBanner from './components/CardBanner/CardBanner';
import Footer from './components/Footer/Footer';

const App = () => (
  <Teste>
    <Navbar />
    <Main>
      <CardBanner />
      <BodyComponent />
    </Main>
    <Footer />
  </Teste>
);

export default App;
