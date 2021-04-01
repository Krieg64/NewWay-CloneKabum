import React from 'react';
import Sidebar from '../SideBar/Sidebar';
import { BoxUser, BoxView } from './USERComponent_styled';
import CardHomePromotion from '../CardHomePromotion/CardHomePromotion';
import CardHome from '../CardHome/CardHome';
import CardBanner from '../CardBanner/CardBanner';

const USERComponent = () => (
  <BoxView>
    <CardBanner />
    <BoxUser>
      <Sidebar />
      <div>
        <CardHomePromotion />
        <CardHome />
      </div>
    </BoxUser>
  </BoxView>
);

export default USERComponent;
