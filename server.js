const express = require('express');
const cors = require('cors');
const { MercadoPagoConfig, Preference } = require('mercadopago');
const { createClient } = require('@supabase/supabase-js');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

// Mercado Pago
const client = new MercadoPagoConfig({
  accessToken: 'APP_USR-8349612901208870-051617-eda5ad193a6918638267d4f58bd1ea92-77180248'
});

// Supabase
const supabase = createClient(
  'https://xyekjiwxhlptjwdfslbi.supabase.co',
  'sb_secret_UleNZT2_eKBbAVjAvgiunw_iACchND5'
);

// Teste
app.get('/', (req, res) => {
  res.send('Backend online');
});

// Criar pagamento
app.post('/create_preference', async (req, res) => {
  try {
    const { items, cliente, total } = req.body;

    if (!items || !cliente) {
      return res.status(400).json({
        error: 'Dados incompletos'
      });
    }

    // Salvar pedido
    const { error } = await supabase
      .from('pedidos')
      .insert([
        {
          nome: cliente.nome || '',
          telefone: cliente.telefone || '',
          endereco: cliente.endereco || '',
          cidade: cliente.cidade || '',
          cep: cliente.cep || '',
          items,
          total: total || 0
        }
      ]);

    if (error) {
      console.error('Erro Supabase:', error);
    }

    // Mercado Pago
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

app.get('/', (req, res) => res.send('Backend online'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
