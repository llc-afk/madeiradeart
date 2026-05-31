const express = require('express');
const cors = require('cors');
const { MercadoPagoConfig, Preference } = require('mercadopago');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

const client = new MercadoPagoConfig({
  accessToken: 'APP_USR-1771978546796941-051617-38ba5e0efe6897805c17f8ea1d731a1c-3407518652'
});

app.post('/create_preference', async (req, res) => {
  try {
    const { items, cliente } = req.body;

    if (!items || !cliente) {
      return res.status(400).json({ error: 'Dados incompletos' });
    }

    const preference = new Preference(client);
    
    const response = await preference.create({
      body: {
        items: items,
        back_urls: {
          success: "https://madeiradeart.vercel.app",
          failure: "https://madeiradeart.vercel.app",
          pending: "https://madeiradeart.vercel.app"
        },
        auto_return: "approved",
        statement_descriptor: "MADEIRA DE ART"
      }
    });

    res.json({ init_point: response.init_point });

  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => res.send('Backend online - Limpo'));

app.listen(3000, () => console.log('🚀 Servidor rodando'));
