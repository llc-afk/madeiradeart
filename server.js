const express = require('express');
const cors = require('cors');
<<<<<<< HEAD

=======
>>>>>>> 050fee9da86496eeac542497638bedb5eb02f92a
const { MercadoPagoConfig, Preference } = require('mercadopago');
const { createClient } = require('@supabase/supabase-js');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.json());

<<<<<<< HEAD
/* =========================================
   MERCADO PAGO
========================================= */

const client = new MercadoPagoConfig({
  accessToken: 'APP_USR-8349612901208870-051617-eda5ad193a6918638267d4f58bd1ea92-77180248'
=======
// Mercado Pago
const client = new MercadoPagoConfig({
accessToken: 'APP_USR-8349612901208870-051617-eda5ad193a6918638267d4f58bd1ea92-77180248'
>>>>>>> 050fee9da86496eeac542497638bedb5eb02f92a
});

// Supabase
const supabase = createClient(
'[https://xyekjiwxhlptjwdfslbi.supabase.co](https://xyekjiwxhlptjwdfslbi.supabase.co/)',
'sb_secret_4v3XvA9qlznbCc3_GJjK3Q_wclhgUnR'
);

<<<<<<< HEAD
/* =========================================
   TESTE
========================================= */

app.get('/', (req, res) => {
  res.send('Backend online');
});

/* =========================================
   CRIAR PAGAMENTO
========================================= */

app.post('/create_preference', async (req, res) => {
  try {
    const { items, cliente, total } = req.body;

    if (!items || !cliente) {
      return res.status(400).json({
        error: 'Dados incompletos'
      });
    }

    /* SALVAR PEDIDO */

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

    /* MERCADO PAGO */

    const preference = new Preference(client);

    const response = await preference.create({
      body: {
        items: items,
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
=======
app.post('/create_preference', async (req, res) => {
try {
const { items, cliente } = req.body;

```
if (!items || !cliente) {
  return res.status(400).json({ error: 'Dados incompletos' });
}

// Salvar no Supabase
await supabase.from('pedidos').insert([{
  nome: cliente.nome,
  telefone: cliente.telefone,
  endereco: cliente.endereco,
  cidade: cliente.cidade,
  cep: cliente.cep,
  items: items,
  status: 'pendente',
  created_at: new Date().toISOString()
}]);

// Mercado Pago
const preference = new Preference(client);

const response = await preference.create({
  body: {
    items: items,
    back_urls: {
      success: "<https://madeiradeart.vercel.app>",
      failure: "<https://madeiradeart.vercel.app>",
      pending: "<https://madeiradeart.vercel.app>"
    },
    auto_return: "approved",
  }
});

res.json({ init_point: response.init_point });
```

} catch (error) {
console.error('Erro completo:', error);
res.status(500).json({ error: error.message });
}
>>>>>>> 050fee9da86496eeac542497638bedb5eb02f92a
});

app.get('/', (req, res) => res.send('Backend online'));

<<<<<<< HEAD
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
=======
app.listen(3000, () => console.log('Servidor rodando'));
>>>>>>> 050fee9da86496eeac542497638bedb5eb02f92a
