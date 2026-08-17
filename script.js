let carrinho = [];

try {
  carrinho = JSON.parse(localStorage.getItem('madeira-de-art-carrinho') || '[]');
} catch (erro) {
  carrinho = [];
}

function salvarCarrinho() {
  try {
    localStorage.setItem('madeira-de-art-carrinho', JSON.stringify(carrinho));
  } catch (erro) {
    // O catálogo continua funcionando mesmo quando o navegador bloqueia o armazenamento local.
  }
}

/* =========================================
   CATEGORIAS POR FAIXA DE PREÇO
========================================= */

function configurarCategorias() {

  const cards = Array.from(document.querySelectorAll('.produto-card'));
  const botoes = Array.from(document.querySelectorAll('.categoria-btn'));
  const tipos = Array.from(document.querySelectorAll('.subcategoria-btn'));
  const status = document.getElementById('filtro-status');
  const busca = document.getElementById('busca-produtos');
  const ordenar = document.getElementById('ordenar-produtos');
  const grid = document.getElementById('produtos-grid');
  let faixaAtual = 'todos';
  let tipoAtual = 'todos';
  let buscaAtual = '';

  const tiposPorProduto = {
    'lembrancinha de festa de 15 anos': 'lembrancinhas',
    'caixinhas lembrancinhas': 'lembrancinhas',
    'caixa primeira comunhão': 'religiosos',
    'nossa senhora': 'religiosos',
    'sagrada familia': 'religiosos',
    'oratórios': 'religiosos',
    'porta chave': 'utilidades',
    'porta vinho': 'utilidades',
    'porta joia': 'utilidades',
    'porta retrato profições': 'utilidades',
    'caixa tampa articulada': 'caixas',
    'caixas lisas': 'caixas',
    'caixa cofre 10.000': 'caixas',
    'caixa colecionador da copa 26': 'caixas',
    'cactos': 'decoracao',
    'placas informativas': 'decoracao',
    'placas decorativas': 'decoracao'
  };

  cards.forEach((card) => {
    const textoPreco = card.querySelector('.produto-bottom span')?.textContent || '';
    const preco = Number(textoPreco.replace(/[^0-9,]/g, '').replace(',', '.'));

    card.dataset.preco = Number.isFinite(preco) ? preco : 0;

    const titulo = card.querySelector('h3')?.textContent.trim() || '';
    card.dataset.tipo = tiposPorProduto[titulo.toLowerCase()] || 'decoracao';
    card.dataset.ordem = cards.indexOf(card);

    if (!card.querySelector('.produto-badge')) {
      const badge = document.createElement('span');
      badge.className = 'produto-badge';
      badge.textContent = Number(card.dataset.preco) <= 10 ? 'Queridinho' : 'Artesanal';
      card.appendChild(badge);
    }

    const imagem = card.querySelector('img');
    if (imagem) {
      imagem.loading = 'lazy';
      imagem.decoding = 'async';

      if (titulo && (!imagem.alt || imagem.alt === 'Produto')) {
        imagem.alt = titulo;
      }
    }

    const bottom = card.querySelector('.produto-bottom');
    if (bottom && !bottom.querySelector('.detalhes-btn')) {
      const detalhes = document.createElement('button');
      detalhes.type = 'button';
      detalhes.className = 'detalhes-btn';
      detalhes.textContent = 'Detalhes';
      detalhes.addEventListener('click', () => abrirDetalhes(card));
      bottom.insertBefore(detalhes, bottom.querySelector('button'));
    }
  });

  function aplicarFiltros() {
    const termo = buscaAtual.toLowerCase();
    let visiveis = 0;

    cards.forEach((card) => {
      const preco = Number(card.dataset.preco);
      const texto = card.textContent.toLowerCase();
      const dentroDaFaixa = faixaAtual === 'todos'
        || (faixaAtual === '0-10' && preco >= 0 && preco <= 10)
        || (faixaAtual === '10-50' && preco > 10 && preco <= 50)
        || (faixaAtual === '50-1000' && preco > 50 && preco <= 1000);
      const mostrar = dentroDaFaixa
        && (tipoAtual === 'todos' || card.dataset.tipo === tipoAtual)
        && (!termo || texto.includes(termo));

      card.hidden = !mostrar;
      if (mostrar) visiveis += 1;
    });

    const ordenacao = ordenar?.value || 'padrao';
    const ordenados = [...cards].sort((a, b) => {
      if (ordenacao === 'menor-preco') return Number(a.dataset.preco) - Number(b.dataset.preco);
      if (ordenacao === 'maior-preco') return Number(b.dataset.preco) - Number(a.dataset.preco);
      if (ordenacao === 'nome') return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent, 'pt-BR');
      return Number(a.dataset.ordem) - Number(b.dataset.ordem);
    });
    ordenados.forEach((card) => grid?.appendChild(card));

    botoes.forEach((botao) => {
      const ativo = botao.dataset.filtro === faixaAtual;
      botao.classList.toggle('ativo', ativo);
      botao.setAttribute('aria-selected', String(ativo));
    });

    tipos.forEach((botao) => botao.classList.toggle('ativo', botao.dataset.tipo === tipoAtual));

    if (status) {
      status.textContent = `${visiveis} produto${visiveis === 1 ? '' : 's'} encontrado${visiveis === 1 ? '' : 's'}`;
    }
  }

  botoes.forEach((botao) => botao.addEventListener('click', () => {
    faixaAtual = botao.dataset.filtro;
    aplicarFiltros();
  }));
  tipos.forEach((botao) => botao.addEventListener('click', () => {
    tipoAtual = botao.dataset.tipo;
    aplicarFiltros();
  }));
  busca?.addEventListener('input', () => {
    buscaAtual = busca.value.trim();
    aplicarFiltros();
  });
  ordenar?.addEventListener('change', aplicarFiltros);

  aplicarFiltros();
}

configurarCategorias();
atualizarCarrinho();

let produtoSelecionado = null;

function abrirDetalhes(card) {
  produtoSelecionado = card;
  const imagem = card.querySelector('img');
  document.getElementById('produto-modal-imagem').src = imagem.src;
  document.getElementById('produto-modal-imagem').alt = imagem.alt;
  document.getElementById('produto-modal-titulo').textContent = card.querySelector('h3').textContent.trim();
  document.getElementById('produto-modal-descricao').textContent = card.querySelector('.produto-info p').textContent.trim();
  document.getElementById('produto-modal-preco').textContent = card.querySelector('.produto-bottom span').textContent.trim();
  const modal = document.getElementById('produto-modal');
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
}

function fecharDetalhes() {
  const modal = document.getElementById('produto-modal');
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}

function pedirNoWhatsapp() {
  if (!produtoSelecionado) return;
  const nome = produtoSelecionado.querySelector('h3').textContent.trim();
  const preco = produtoSelecionado.querySelector('.produto-bottom span').textContent.trim();
  const texto = encodeURIComponent(`Olá! Tenho interesse em: ${nome} (${preco}).`);
  window.open(`https://wa.me/5542999645842?text=${texto}`, '_blank', 'noopener');
}

document.addEventListener('keydown', (evento) => {
  if (evento.key === 'Escape') {
    fecharDetalhes();
    fecharCarrinho();
  }
});

/* =========================================
   ADICIONAR PRODUTOS MANUALMENTE
========================================= */

function adicionarCarrinho(nome, preco) {

  carrinho.push({
    nome,
    preco
  });

  salvarCarrinho();

  atualizarCarrinho();

  alert(nome + ' adicionado ao carrinho!');

}

/* =========================================
   ATUALIZAR CONTADOR
========================================= */

function atualizarCarrinho() {

  salvarCarrinho();

  document.getElementById('cart-count').innerText =
    carrinho.length;

}

/* =========================================
   ABRIR CARRINHO
========================================= */

function abrirCarrinho() {

  const modal =
    document.getElementById('cart-modal');

  const items =
    document.getElementById('cart-items');

  const total =
    document.getElementById('cart-total');

  items.innerHTML = '';

  const agrupados = carrinho.reduce((grupos, produto) => {
    const chave = `${produto.nome}-${produto.preco}`;
    if (!grupos[chave]) grupos[chave] = { ...produto, quantidade: 0 };
    grupos[chave].quantidade += 1;
    return grupos;
  }, {});

  let valorTotal = 0;

  Object.values(agrupados).forEach(produto => {
    valorTotal += produto.preco * produto.quantidade;
    const item = document.createElement('div');
    item.className = 'cart-item';
    item.innerHTML = `
      <div>
        <strong>${produto.nome}</strong>
        <span>${produto.quantidade} × R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
      </div>
      <button type="button" aria-label="Remover ${produto.nome}" onclick="removerDoCarrinho('${produto.nome.replace(/'/g, "\\'")}', ${produto.preco})">−</button>
    `;
    items.appendChild(item);
  });

  if (carrinho.length === 0) {
    items.innerHTML = '<p class="cart-vazio">Seu carrinho está vazio. Escolha uma peça para começar.</p>';
  }

  total.innerText = valorTotal.toFixed(2).replace('.', ',');

  modal.style.display = 'flex';

}

function removerDoCarrinho(nome, preco) {
  const indice = carrinho.findIndex(produto => produto.nome === nome && produto.preco === preco);
  if (indice !== -1) carrinho.splice(indice, 1);
  atualizarCarrinho();
  abrirCarrinho();
}

/* =========================================
   FECHAR CARRINHO
========================================= */

function fecharCarrinho() {

  document.getElementById('cart-modal')
    .style.display = 'none';

}

/* =========================================
   FINALIZAR COMPRA
========================================= */

async function finalizarCompra() {

  if (carrinho.length === 0) {

    alert('Carrinho vazio');

    return;

  }

  // CAMPOS DO CLIENTE

  const nome =
    document.getElementById('nome').value;

  const telefone =
    document.getElementById('telefone').value;

  const endereco =
    document.getElementById('endereco').value;

  const cidade =
    document.getElementById('cidade').value;

  const cep =
    document.getElementById('cep').value;

  // SEGURANÇA EXTRA

  if (
    !nome ||
    !telefone ||
    !endereco ||
    !cidade ||
    !cep
  ) {

    alert('Preencha todos os campos');

    return;

  }

  // PRODUTOS

  const items = carrinho.map(produto => ({

    title: produto.nome,

    quantity: 1,

    unit_price: Number(produto.preco),

    currency_id: 'BRL'

  }));

  try {

    const response = await fetch(
      'https://madeira-backend.vercel.app/create_preference',
      {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({

          items,

          cliente: {
            nome,
            telefone,
            endereco,
            cidade,
            cep
          }

        })

      }
    );

    const data = await response.json();

    if (data.init_point) {

      window.location.href =
        data.init_point;

    } else {

      alert('Erro ao criar pagamento');

    }

  } catch (error) {

    console.log(error);

    alert('Erro conectando backend');

  }

}

/* =========================================
   LIBERAR BOTÃO AUTOMATICAMENTE
========================================= */

const camposCheckout = document.querySelectorAll(
  '#nome, #telefone, #endereco, #cidade, #cep'
);

const botaoCheckout =
  document.getElementById(
    'checkout-button'
  );

function verificarFormulario() {

  let formularioCompleto = true;

  camposCheckout.forEach(campo => {

    if (campo.value.trim() === '') {

      formularioCompleto = false;

    }

  });

  if (formularioCompleto) {

    botaoCheckout.disabled = false;

    botaoCheckout.classList.remove(
      'disabled'
    );

  } else {

    botaoCheckout.disabled = true;

    botaoCheckout.classList.add(
      'disabled'
    );

  }

}

camposCheckout.forEach(campo => {

  campo.addEventListener(
    'input',
    verificarFormulario
  );

});
