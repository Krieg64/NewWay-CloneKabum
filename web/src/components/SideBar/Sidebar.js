import React from 'react';
import { Divmain, BoxName } from './Sidebar_styled';
import { productHar } from '../../bank/bank';

const Sidebar = () => (
  <Divmain>
    {productHar.map((product) => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <BoxName>
          {product.subname.map((subname) => (
            <div key={subname.id} className="names_products">
              <i className="fas fa-caret-right" />
              <a href="https://www.github.com/krieg64">{subname.name}</a>
            </div>
          ))}
        </BoxName>
      </div>
    ))}
  </Divmain>
);

export default Sidebar;
