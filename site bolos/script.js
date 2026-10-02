const cakes = [
    {
        id: 1,
        name: "Bolo de Morango",
        description: "Massa branca fofinha, recheio de creme e cobertura com morangos frescos.",
        price: 72,
        image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 2,
        name: "Chocolate Cremoso",
        description: "Camadas de chocolate, brigadeiro macio e raspas de cacau por cima.",
        price: 85,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 3,
        name: "Red Velvet",
        description: "Massa aveludada com recheio de cream cheese e acabamento delicado.",
        price: 92,
        image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 4,
        name: "Cenoura com Ganache",
        description: "Receita caseira de cenoura com uma camada generosa de ganache.",
        price: 58,
        image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 5,
        name: "Ninho com Frutas",
        description: "Creme de leite Ninho, frutas selecionadas e massa leve de baunilha.",
        price: 88,
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 6,
        name: "Doce de Leite",
        description: "Bolo molhadinho com recheio de doce de leite artesanal e crocante.",
        price: 79,
        image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=80"
    }
];

let cart = JSON.parse(localStorage.getItem("doceFatiaCart")) || [];

const deliveryOptions = {
    padrao: {
        label: "Entrega padrao",
        fee: 8,
        note: "Entrega padrao selecionada: previsao de 35 a 50 min."
    },
    expressa: {
        label: "Entrega expressa",
        fee: 14,
        note: "Entrega expressa selecionada: previsao de 20 a 30 min."
    },
    retirada: {
        label: "Retirada na loja",
        fee: 0,
        note: "Retirada selecionada: seu bolo fica pronto em cerca de 25 min."
    }
};

const productList = document.querySelector("#product-list");
const cartItems = document.querySelector("#cart-items");
const subtotal = document.querySelector("#subtotal");
const deliveryValue = document.querySelector("#delivery");
const deliveryLabel = document.querySelector("#delivery-label");
const paymentLabel = document.querySelector("#payment-label");
const total = document.querySelector("#total");
const cartCount = document.querySelector(".cart-count");
const screens = document.querySelectorAll(".screen");
const deliveryInputs = document.querySelectorAll('input[name="delivery-mode"]');
const paymentInputs = document.querySelectorAll('input[name="payment-method"]');
const addressInput = document.querySelector("#endereco");
const checkoutNote = document.querySelector("#checkout-note");
const menuButton = document.querySelector(".menu-botao");
const navigation = document.querySelector(".navegacao");
const checkoutButton = document.querySelector("#checkout");
const loginForm = document.querySelector("#login-form");
const signupForm = document.querySelector("#signup-form");

const currency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
});

function saveCart() {
    localStorage.setItem("doceFatiaCart", JSON.stringify(cart));
}

function getSelectedDelivery() {
    const selected = document.querySelector('input[name="delivery-mode"]:checked');
    return deliveryOptions[selected ? selected.value : "padrao"];
}

function getSelectedPayment() {
    const selected = document.querySelector('input[name="payment-method"]:checked');
    return selected ? selected.value : "PIX";
}

function updateChoiceCards(inputs, activeClass) {
    inputs.forEach((input) => {
        input.closest(activeClass).classList.toggle("ativo", input.checked);
    });
}

function showScreen(screenId) {
    screens.forEach((screen) => {
        screen.classList.toggle("ativo", screen.id === screenId);
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.toggle("ativo", link.dataset.screen === screenId);
    });

    navigation.classList.remove("aberto");
    menuButton.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderProducts() {
    productList.innerHTML = cakes.map((cake) => `
        <article class="produto-card">
            <img src="${cake.image}" alt="${cake.name}">
            <div class="produto-conteudo">
                <h3>${cake.name}</h3>
                <p>${cake.description}</p>
                <span class="preco">${currency.format(cake.price)}</span>
                <div class="card-acoes">
                    <button class="botao principal" type="button" data-add="${cake.id}">Adicionar ao carrinho</button>
                </div>
            </div>
        </article>
    `).join("");
}

function getCartQuantity() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function getCartSubtotal() {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function renderCart() {
    cartCount.textContent = getCartQuantity();

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="estado-vazio">
                <h2>Seu carrinho esta vazio</h2>
                <p>Volte para a Home e escolha um bolo delicioso para o seu pedido.</p>
                <button class="botao principal" type="button" data-screen="home">Ver bolos</button>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map((item) => `
            <article class="item-carrinho">
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h3>${item.name}</h3>
                    <p>${currency.format(item.price)} cada</p>
                </div>
                <div class="quantidade" aria-label="Quantidade de ${item.name}">
                    <button type="button" data-decrease="${item.id}" aria-label="Diminuir quantidade">-</button>
                    <strong>${item.quantity}</strong>
                    <button type="button" data-increase="${item.id}" aria-label="Aumentar quantidade">+</button>
                </div>
            </article>
        `).join("");
    }

    const cartSubtotal = getCartSubtotal();
    const selectedDelivery = getSelectedDelivery();
    const selectedPayment = getSelectedPayment();
    const delivery = cartSubtotal > 0 ? selectedDelivery.fee : 0;

    subtotal.textContent = currency.format(cartSubtotal);
    deliveryLabel.textContent = selectedDelivery.label;
    deliveryValue.textContent = currency.format(delivery);
    paymentLabel.textContent = selectedPayment;
    total.textContent = currency.format(cartSubtotal + delivery);
    checkoutNote.textContent = cartSubtotal > 0 ? selectedDelivery.note : "Escolha seus itens para liberar o pedido.";
    addressInput.disabled = selectedDelivery.label === "Retirada na loja";
    addressInput.placeholder = addressInput.disabled ? "Retirada na loja selecionada" : "Rua, numero, bairro";

    updateChoiceCards(deliveryInputs, ".opcao-card");
    updateChoiceCards(paymentInputs, ".pagamento-card");
    saveCart();
}

function addToCart(cakeId) {
    const cake = cakes.find((item) => item.id === cakeId);
    const existingItem = cart.find((item) => item.id === cakeId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...cake, quantity: 1 });
    }

    renderCart();
}

function updateQuantity(cakeId, change) {
    cart = cart.map((item) => {
        if (item.id === cakeId) {
            return { ...item, quantity: item.quantity + change };
        }

        return item;
    }).filter((item) => item.quantity > 0);

    renderCart();
}

document.addEventListener("click", (event) => {
    const screenButton = event.target.closest("[data-screen]");
    const addButton = event.target.closest("[data-add]");
    const increaseButton = event.target.closest("[data-increase]");
    const decreaseButton = event.target.closest("[data-decrease]");

    if (screenButton) {
        showScreen(screenButton.dataset.screen);
    }

    if (addButton) {
        addToCart(Number(addButton.dataset.add));
        showScreen("cart");
    }

    if (increaseButton) {
        updateQuantity(Number(increaseButton.dataset.increase), 1);
    }

    if (decreaseButton) {
        updateQuantity(Number(decreaseButton.dataset.decrease), -1);
    }
});

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("aberto");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

deliveryInputs.forEach((input) => {
    input.addEventListener("change", renderCart);
});

paymentInputs.forEach((input) => {
    input.addEventListener("change", renderCart);
});

checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
        showScreen("home");
        return;
    }

    const payment = getSelectedPayment();
    cart = [];
    renderCart();
    checkoutButton.textContent = `Pedido enviado via ${payment}!`;

    setTimeout(() => {
        checkoutButton.textContent = "Finalizar pedido";
        showScreen("home");
    }, 1400);
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#login-message").textContent = "Login realizado com sucesso!";
    loginForm.reset();
});

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    document.querySelector("#signup-message").textContent = "Cadastro criado com sucesso!";
    signupForm.reset();
});

renderProducts();
renderCart();
