/*import {
    getCart,
    getTotalItems,
    increaseQuantity,
    decreaseQuantity,
    removeProduct
} from "../services/cartService.js";*/

import {
    getCart,
    getTotalItems,
    getCartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeProduct
} from "../services/cartService.js";

import { createCartItem } from "../components/cartItem.js";
//import { createCartSummary } from "../components/cartSummary.js";
import { showToast } from "../services/toastService.js";

const cartItems = document.getElementById("cartItems");

export function renderCart() {

    const cartCounter = document.getElementById("cartCounter");

    const cart = getCart();

    // =========================
    // Contador
    // =========================

    const totalItems = getTotalItems();

    cartCounter.textContent = totalItems;

    cartCounter.style.display =
        totalItems > 0 ? "block" : "none";

    // =========================
    // Resumen
    // =========================

    const subtotalElement = document.getElementById("summarySubtotal");

    const totalElement = document.getElementById("summaryTotal");

    const total = getCartTotal();

    subtotalElement.textContent =
        `$${total.toLocaleString("es-AR")}`;

    totalElement.textContent =
        `$${total.toLocaleString("es-AR")}`;

    // =========================
    // Carrito vacío
    // =========================

  if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="text-center text-muted mt-5">

                <i class="bi bi-cart-x" style="font-size:3rem;"></i>

                <p class="mt-3">

                    Tu carrito está vacío.

                </p>

            </div>

        `;

        return;

    }

    // =========================
    // Mostrar productos
    // =========================

    cartItems.innerHTML = "";

    cart.forEach(product => {

        cartItems.innerHTML += createCartItem(product);

    });

    //cartItems.innerHTML += createCartSummary(cart);

}

// =========================
// Eventos del carrito
// =========================

document.addEventListener("click", (event) => {

    // Aumentar cantidad

    if (event.target.closest(".increase")) {

        const id = Number(event.target.closest(".increase").dataset.id);

        increaseQuantity(id);

        renderCart();

    }

    // Disminuir cantidad

    if (event.target.closest(".decrease")) {

        const id = Number(event.target.closest(".decrease").dataset.id);

        decreaseQuantity(id);

        renderCart();

    }

    // Eliminar producto

    if (event.target.closest(".remove-btn")) {

        const id = Number(event.target.closest(".remove-btn").dataset.id);

        removeProduct(id);

        renderCart();

        showToast("Producto eliminado del carrito.");

    }

});