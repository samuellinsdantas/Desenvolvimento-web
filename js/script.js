document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartIcon = document.querySelector('.carrinho');
    const modal = document.getElementById('modal-carrinho');
    const closeModal = document.querySelector('.fechar-modal');
    const cartItemsContainer = document.getElementById('itens-carrinho');
    const totalPriceElement = document.getElementById('valor-total');
    const cartCountElement = document.querySelector('.carrinho');
    const filterButtons = document.querySelectorAll('.filtros button[data-filter]');
    const showAllButton = document.querySelector('.btn-todos');
    const products = document.querySelectorAll('.produto');

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    }

    // --- CART LOGIC ---

    function updateCartUI() {
        // Update cart count in header
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCountElement) {
            cartCountElement.innerHTML = `🛒 Carrinho (${totalItems})`;
        }

        // Update modal content
        if (cartItemsContainer && totalPriceElement) {
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>O carrinho está vazio.</p>';
                totalPriceElement.textContent = '0,00';
            } else {
                cartItemsContainer.innerHTML = '';
                let total = 0;
                cart.forEach((item, index) => {
                    const itemElement = document.createElement('div');
                    itemElement.classList.add('item-carrinho');
                    itemElement.innerHTML = `
                        <div>
                            <strong>${item.name}</strong> (x${item.quantity})
                        </div>
                        <div>
                            R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}
                            <button class="remove-item" data-index="${index}" style="width: auto; margin: 0 0 0 10px; padding: 5px 10px; background: #ff4d4d;">X</button>
                        </div>
                    `;
                    cartItemsContainer.appendChild(itemElement);
                    total += item.price * item.quantity;
                });
                totalPriceElement.textContent = total.toFixed(2).replace('.', ',');
            }
        }

        // Add event listeners to remove buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                removeFromCart(index);
            });
        });
    }

    function addToCart(name, price) {
        const existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price: parseFloat(price), quantity: 1 });
        }
        saveCart();
        alert(`${name} adicionado ao carrinho!`);
    }

    function removeFromCart(index) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        saveCart();
    }

    // Initial UI update
    updateCartUI();

    // Add to cart buttons
    document.querySelectorAll('.add-carrinho').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-nome');
            const price = button.getAttribute('data-preco');
            addToCart(name, price);
        });
    });

    // Modal controls
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            if (modal) {
                modal.style.display = 'flex';
            } else {
                window.location.href = 'loja.html';
            }
        });
    }

    if (closeModal && modal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // --- FILTER LOGIC ---

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            products.forEach(product => {
                if (product.getAttribute('data-category') === filter) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        });
    });

    if (showAllButton) {
        showAllButton.addEventListener('click', () => {
            products.forEach(product => {
                product.style.display = 'block';
            });
        });
    }

    // Finalize purchase
    const finalizeBtn = document.querySelector('.btn-finalizar');
    if (finalizeBtn) {
        finalizeBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                alert('Compra finalizada com sucesso! Obrigado por comprar na InfoTech.');
                cart = [];
                saveCart();
                modal.style.display = 'none';
            } else {
                alert('Seu carrinho está vazio!');
            }
        });
    }
});
