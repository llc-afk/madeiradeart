require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { MercadoPagoConfig, Preference } = require('mercadopago');
const { createClient } = require('@supabase/supabase-js');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

/* Mercado Pago */
const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN
});

/* Supabase */
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET
);

/* Teste */
app.get('/', (req, res) => {
  res.send('Backend online');
});

/* Criar pagamento */
app.post('/create_preference', async (req, res) => {
  try {
    const { items, cliente, total } = req.body;

    if (!items || !cliente) {
      return res.status(400).json({
        error: 'Dados incompletos'
      });
    }

    const { error } = await supabase
      .from('pedidos')
      .insert([
        {
          nome: cliente.nome || '',
          telefone: cliente.telefone || '',
          endereco: cliente.endereco || '',
          cidade: cliente.cidade || '',
          cep: cliente.cep || '',
          items: items,
          total: total || 0
        }
      ]);

    if (error) {
      console.error('Erro Supabase:', error);
    }

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items,
        back_urls: {
          success: 'https://madeiradeart.vercel.app',
          failure: 'https://madeiradeart.vercel.app',
          pending: 'https://madeiradeart.vercel.app'
        },
        auto_return: 'approved'
      }
    });

    res.json({
      init_point: response.init_point
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      error: err.message
    });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
