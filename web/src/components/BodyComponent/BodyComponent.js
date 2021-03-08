import React from 'react';
import { BoxBody } from './BodyComponent_styled';
import Sidebar from '../SideBar/Sidebar';
import CardHomePromotion from '../CardHomePromotion/CardHomePromotion';
// import CardPagePromotion from '../CardPagePromotion/CardPagePromotion';

const BodyComponent = () => (
  <BoxBody>
    <Sidebar />

    <CardHomePromotion />
  </BoxBody>
);

export default BodyComponent;
