import React from 'react';
import { BoxBody, BoxView } from './BodyComponent_styled';
import Sidebar from '../SideBar/Sidebar';
import CardHomePromotion from '../CardHomePromotion/CardHomePromotion';
import CardHome from '../CardHome/CardHome';
// import CardPagePromotion from '../CardPagePromotion/CardPagePromotion';

const BodyComponent = () => (
  <BoxBody>
    <Sidebar />
    <BoxView>
      <CardHomePromotion />
      <CardHome />
    </BoxView>
  </BoxBody>
);

export default BodyComponent;
