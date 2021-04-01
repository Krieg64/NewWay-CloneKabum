import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { products } from '../../bank/bank';
// import ReactHtmlParser from 'react-html-parser';

const TesteComponent = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8004/view').then((response) => {
      setProdutos(response.data);
    });
  }, []);

  // const tt = produtos.filter((produto) => produto).map((dess) => dess._id);
  // console.log(tt);

  // const des1 = image.map((de) => de.images[0].filename);
  // console.log('image', image);

  // console.log('des', des1);

  return (
    <div>
      {produtos.map((prod) => (
        <div key={prod.id}>
          <p>{prod.title}</p>
          {/* <img src={`http://localhost:8004/files/${firstImage}`} alt={prod.images.originalname} /> */}
        </div>
      ))}
      {
      produtos.filter((produto) => (!!produto.images.length)).map((dess) => (
        <div key={dess._id}>
          <h2>{dess.title}</h2>
          <img src={`http://localhost:8004/files/${dess.images[0].filename}`} alt="test" />
        </div>
      ))
      }

    </div>
  );
};

export default TesteComponent;
