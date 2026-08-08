import { products } from "./data/products.js";
import { createProductCard } from "./components/productCard.js";

import {
    getFavorites,
    toggleFavorite,
    getTotalFavorites
} from "./services/favoriteService.js";

import {
    addProduct
} from "./services/cartService.js";

import {
    showToast
} from "./services/toastService.js";

import {
    renderCart
} from "./pages/cart.js";

//======================================
// CONTENEDOR
//======================================

const favoritesContainer =
    document.getElementById("favoritesContainer");

//======================================
// RENDER FAVORITOS
//======================================

function renderFavorites(){

    const favorites = getFavorites();

    favoritesContainer.innerHTML = "";

    if(favorites.length === 0){

        favoritesContainer.innerHTML = `

            <div class="col-12 text-center py-5">

                <i class="bi bi-heart"
                   style="font-size:4rem;color:#d1d5db;"></i>

                <h2 class="mt-4">
                    Todavía no agregaste favoritos
                </h2>

                <p class="text-muted">
                    Cuando marques productos con ❤️ aparecerán aquí.
                </p>

                <a
                    href="../index.html"
                    class="btn-primary-custom mt-3">

                    Ir a comprar

                </a>

            </div>

        `;

        return;

    }

    favorites.forEach(product=>{

        favoritesContainer.innerHTML +=
            createProductCard(product);

    });

}

//======================================
// CONTADOR FAVORITOS
//======================================

function updateFavoriteCounter(){

    const counter =
        document.getElementById("favoriteCounter");

    if(!counter) return;

    const total = getTotalFavorites();

    counter.textContent = total;

    counter.style.display =
        total > 0 ? "flex" : "none";

}

//======================================
// EVENTOS
//======================================

document.addEventListener("click",(event)=>{

    //--------------------------------------------------
    // FAVORITOS
    //--------------------------------------------------

    const favoriteButton =
        event.target.closest(".favorite-btn");

    if(favoriteButton){

        event.preventDefault();
        event.stopPropagation();

        const id =
            Number(favoriteButton.dataset.id);

        const product =
            products.find(product=>product.id===id);

        if(!product) return;

        toggleFavorite(product);

        showToast("Producto eliminado de favoritos");

        console.log(product.name);

        updateFavoriteCounter();

        renderFavorites();

        return;

    }

    //--------------------------------------------------
    // CARRITO
    //--------------------------------------------------

    const cartButton =
        event.target.closest(".add-to-cart");

    if(cartButton){

        const id =
            Number(cartButton.dataset.id);

        const product =
            products.find(product=>product.id===id);

        if(!product) return;

        addProduct(product);

        renderCart();

        showToast(`${product.name} agregado al carrito.`);

        console.log(product.name);

    }

});

//======================================
// INICIO
//======================================

renderFavorites();

updateFavoriteCounter();

renderCart();