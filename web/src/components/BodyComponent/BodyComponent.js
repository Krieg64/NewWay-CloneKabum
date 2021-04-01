import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BoxBody } from './BodyComponent_styled';
// import CardPagePromotion from '../CardPagePromotion/CardPagePromotion';
// import TesteComponent from '../TestComponent/TestComponent';

import ADMComponent from '../ADMComponent/ADMComponent';
import USERComponent from '../USERComponent/USERComponent';

const BodyComponent = () => (
  <BoxBody>
    <Switch>
      <Route exact path="/" component={USERComponent} />
      <Route path="/adm" component={ADMComponent} />
    </Switch>
  </BoxBody>
);

export default BodyComponent;
