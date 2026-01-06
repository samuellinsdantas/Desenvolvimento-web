document.addEventListener("DOMContentLoaded", () => {
  let contadorCarrinho = 0;

  const carrinhoTexto = document.querySelector(".carrinho");
  const botoesComprar = document.querySelectorAll(".produto button");
  const botoesFiltro = document.querySelectorAll(".filtros button[data-filter]");
  const botaoTodos = document.querySelector(".btn-todos");
  const produtos = document.querySelectorAll(".produto");

  // Carrinho
  botoesComprar.forEach(botao => {
    botao.addEventListener("click", () => {
      contadorCarrinho++;
      carrinhoTexto.textContent = `🛒 Carrinho (${contadorCarrinho})`;
      alert("Produto adicionado ao carrinho!");
    });
  });

  // Filtro por categoria
  botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {
      const categoria = botao.dataset.filter;

      produtos.forEach(produto => {
        produto.style.display =
          produto.dataset.category === categoria ? "block" : "none";
      });
    });
  });

  // Mostrar todos
  botaoTodos.addEventListener("click", () => {
    produtos.forEach(produto => {
      produto.style.display = "block";
    });
  });
});
