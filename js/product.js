import { products } from "../js/data/products.js";
import { addProduct } from "../js/services/cartService.js";
import { showToast } from "../js/services/toastService.js";
import { renderCart } from "./pages/cart.js";
import { createProductCard } from "../js/components/productCard.js";

import {
    toggleFavorite,
    getTotalFavorites
} from "../js/services/favoriteService.js";

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = products.find(product => product.id === id);

let quantity = 1;

const productDetail = document.getElementById("productDetail");


if (!product) {

    productDetail.innerHTML = `
        <div class="text-center py-5">

            <h2>Producto no encontrado</h2>

            <p>El producto que buscás no existe.</p>

        </div>
    `;

} else {

    productDetail.innerHTML = `

        <div class="product-detail-card">

            <div class="row align-items-center">

                <div class="col-lg-6">

                    <div class="product-image">

                        <img
                            src="../${product.images[0]}"
                            alt="${product.name}"
                            class="img-fluid">

                    </div>

                </div>

                <div class="col-lg-6">

                    <span class="product-category">

                        ${product.category}

                    </span>

                    <h1 class="product-title">

                        ${product.name}

                    </h1>

                    <div class="cart-rating mt-3">

                        ${'<i class="bi bi-star-fill"></i>'.repeat(product.rating)}

                        <span>

                            (${product.reviews} opiniones)

                        </span>

                    </div>

                    <div class="product-price">

                        $${product.price.toLocaleString("es-AR")}

                    </div>

                    <div class="product-features">

                    <div class="feature">

                        <i class="bi bi-truck"></i>

                        <span>Envío gratis a todo el país</span>

                    </div>

                    <div class="feature">

                        <i class="bi bi-check-circle"></i>

                        <span>Stock disponible</span>

                    </div>

                    <div class="feature">

                        <i class="bi bi-arrow-repeat"></i>

                        <span>Cambios hasta 30 días</span>

                    </div>

                    <div class="feature">

                        <i class="bi bi-shield-check"></i>

                        <span>Compra protegida</span>

                    </div>

                </div>

                    ${
                        product.shipping
                        ? `
                        <div class="cart-shipping">

                            <i class="bi bi-truck"></i>

                            Envío gratis

                        </div>
                        `
                        : ""
                    }

                    <div class="product-options">

                    <h6>Color</h6>

                    <div class="color-options">

                        <button class="color-btn active"></button>

                        <button class="color-btn white"></button>

                        <button class="color-btn beige"></button>

                    </div>

                    <h6 class="mt-4">Talle</h6>

                    <div class="size-options">

                        <button class="size-btn">S</button>

                        <button class="size-btn active">M</button>

                        <button class="size-btn">L</button>

                        <button class="size-btn">XL</button>

                    </div>

                </div>

                    <p class="product-description">

                        Prenda confeccionada con materiales de primera calidad,
                        diseñada para brindar comodidad, estilo y durabilidad.
                        Ideal para cualquier ocasión.

                    </p>

                    <div class="product-actions">

                        <div class="product-quantity">

                            <button id="decreaseQty">

                                <i class="bi bi-dash"></i>

                            </button>

                            <span id="quantityValue">1</span>

                            <button id="increaseQty">

                                <i class="bi bi-plus"></i>

                            </button>

                        </div>

                        <button
                            class="btn-primary-custom"
                            id="addToCart">

                            <i class="bi bi-cart-plus"></i>

                            Agregar al carrito

                        </button>

                    </div>

                </div>

            </div>

        </div>

    `;

    // ======================================
    // SELECTOR DE CANTIDAD
    // ======================================

    const quantityValue = document.getElementById("quantityValue");

    document
        .getElementById("increaseQty")
        .addEventListener("click", () => {

            quantity++;

            quantityValue.textContent = quantity;

        });

    document
        .getElementById("decreaseQty")
        .addEventListener("click", () => {

            if (quantity > 1) {

                quantity--;

                quantityValue.textContent = quantity;

            }

        });

    // ======================================
    // AGREGAR AL CARRITO
    // ======================================

    document
        .getElementById("addToCart")
        .addEventListener("click", () => {

            addProduct(product, quantity);

            renderCart();

            showToast(`${quantity} producto(s) agregado(s) al carrito.`);

        });

}

//======================================
// Productos relacionados
//======================================

const relatedContainer = document.getElementById("relatedProducts");

const relatedProducts = products
    .filter(item => item.id !== product.id)
    .slice(0, 4);

relatedProducts.forEach(item => {

    relatedContainer.innerHTML += createProductCard(item);

});

// ======================================
// Inicializar carrito
// ======================================

renderCart();

// ======================================
// FAVORITOS Y CARRITO DE PRODUCTOS RELACIONADOS
// ======================================

document.addEventListener("click", (event) => {

    // -----------------------
    // FAVORITOS
    // -----------------------

    const favoriteButton = event.target.closest(".favorite-btn");

    if (favoriteButton) {

        event.preventDefault();
        event.stopPropagation();

        const id = Number(favoriteButton.dataset.id);

        const selectedProduct = products.find(product => product.id === id);

        if (!selectedProduct) return;

        toggleFavorite(selectedProduct);

        const icon = favoriteButton.querySelector("i");

        if (icon.classList.contains("bi-heart")) {

            icon.classList.replace("bi-heart", "bi-heart-fill");

            showToast("Producto agregado a favoritos ❤️");

            console.log(`${selectedProduct.name} agregado a favoritos`);

        } else {

            icon.classList.replace("bi-heart-fill", "bi-heart");

            showToast("Producto eliminado de favoritos");

            console.log(`${selectedProduct.name} eliminado de favoritos`);

        }

        updateFavoriteCounter();

        return;
    }

    // -----------------------
    // CARRITO
    // -----------------------

    const cartButton = event.target.closest(".add-to-cart");

    if (!cartButton) return;

    const id = Number(cartButton.dataset.id);

    const selectedProduct = products.find(product => product.id === id);

    if (!selectedProduct) return;

    addProduct(selectedProduct);

    renderCart();

    showToast(`${selectedProduct.name} agregado al carrito.`);

    console.log(`${selectedProduct.name} agregado al carrito`);

});

function updateFavoriteCounter() {

    const favoriteCounter =
        document.getElementById("favoriteCounter");

    if (!favoriteCounter) return;

    const total = getTotalFavorites();

    favoriteCounter.textContent = total;

    favoriteCounter.style.display =
        total > 0 ? "flex" : "none";

}

updateFavoriteCounter();