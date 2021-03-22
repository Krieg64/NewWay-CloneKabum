import React, { useState } from 'react';
import axios from 'axios';
import {
  Box, BoxInput, BoxTextArea, Finally,
} from './CreateProductComponent_styled';

const initialValue = {
  title: '',
  titlePromotion: '',
  price: '',
  body: '',
  amount: '',
  images: '',
  tag: '',
};

const CreateProductComponent = () => {
  const [values, setValues] = useState(initialValue);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
    console.log(values);
  }

  async function handleClick() {
    try {
      await axios.post('http://localhost:8004/createproduct', values);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box>
      <h2>Cadastrar Produto</h2>
      <BoxInput>
        <label>
          Titulo do Produto
          <input type="text" name="title" onChange={onChange} />
        </label>
        <label>
          Titulo do Produto em Promoção
          <input type="text" name="titlePromotion" onChange={onChange} />
        </label>
        <label>
          Preço do Produto
          <input type="number" name="price" onChange={onChange} />
        </label>
        <label>
          Quantidade de Produtos
          <input type="number" name="amount" onChange={onChange} />
        </label>
      </BoxInput>
      <BoxTextArea>
        <div>
          <label>
            Descrição do Produto
            <textarea
              type="text"
              id="des1"
              name="body"
              placeholder="Ex: <h2>Descrição</h2><br /><p>-4gb de ram<p></p>"
              onChange={onChange}
            />
          </label>
          <label>
            Images do Produto
            <textarea
              type="text"
              name="images"
              placeholder="Ex: <img scr='URL1' alt='nome da img1' /><img scr='URL2' alt='nome da img2' />"
              onChange={onChange}
            />
          </label>
        </div>
        <Finally>
          <label>
            Categoria do Produto
            <input type="text" name="tag" onChange={onChange} />
          </label>
          <button type="submit" onClick={handleClick}>Cadastrar</button>
        </Finally>
      </BoxTextArea>
    </Box>
  );
};

export default CreateProductComponent;
