const express = require('express');
const mercadopago = require('mercadopago');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mercadopago.configure({
  access_token: 'SEU_ACCESS_TOKEN'
});

app.post('/comprar', async (req, res) => {

  const { nome, preco } = req.body;

  const preference = {
    items: [
      {
        title: nome,
        unit_price: Number(preco),
        quantity: 1
      }
    ]
  };

  try {

    const response = await mercadopago.preferences.create(preference);

    res.json({
      link: response.body.init_point
    });

  } catch (err) {
    console.log(err);
    res.status(500).send('Erro');
  }

});

app.listen(3000, () => {
  console.log('Servidor rodando');
});
