import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import { BoxUser, BoxView } from './USERComponent_styled';
import CardHomePromotion from '../CardHomePromotion/CardHomePromotion';
import CardHome from '../CardHome/CardHome';

const USERComponent = () => (
  <BoxUser>
    <Sidebar />
    <BoxView>
      <CardHomePromotion />
      <CardHome />
    </BoxView>
  </BoxUser>
);

export default USERComponent;
