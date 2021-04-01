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
  tag: '',
};

const CreateProductComponent = () => {
  const [values, setValues] = useState(initialValue);
  const [date, setDate] = useState('');

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
    console.log(values);
  }

  async function handleClick(e) {
    e.preventDefault();

    console.log(date);

    const data = new FormData();
    for (let i = 0; i < date.length; i += 1) { data.append(date[i].name, date[i]); }
    data.append('title', values.title);
    data.append('titlePromotion', values.titlePromotion);
    data.append('price', values.price);
    data.append('body', values.body);
    data.append('amount', values.amount);
    data.append('tag', values.tag);

    axios.post('http://localhost:8004/createproduct', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((response) => {
      response.json({ mensage: 'Produto Cadastrado' });
    }).catch((err) => {
      console.log(err);
    });
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
            <input type="file" name="file" multiple onChange={(e) => { setDate(e.target.files); }} />
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
