import { products } from "./data/products.js";
import { categories } from "./data/categories.js";
import { testimonials } from "./data/testimonials.js";
import { renderCart } from "./pages/cart.js";
import { showToast } from "./services/toastService.js";

import { createProductCard } from "./components/productCard.js";
import { createCategoryCard } from "./components/categoryCard.js";
import { createArrivalCard } from "./components/arrivalCard.js";
import { createTestimonialCard } from "./components/testimonialCard.js";

import { addProduct } from "./services/cartService.js";

import {
    toggleFavorite,
    getTotalFavorites
} from "./services/favoriteService.js";

// =========================
// Productos destacados
// =========================

const featuredProducts = document.getElementById("featuredProducts");

const featuredList = products.filter(product => product.featured);

featuredList.forEach(product => {

    featuredProducts.innerHTML += createProductCard(product);

});

// =========================
// Categorías
// =========================

const categoriesContainer = document.getElementById("categoriesContainer");

categories.forEach(category => {

    categoriesContainer.innerHTML += createCategoryCard(category);

});

// =========================
// Nuevos ingresos
// =========================

const arrivalsContainer = document.getElementById("arrivalsContainer");

const arrivalsList = products.filter(product => product.arrival);

arrivalsList.forEach(product => {

    arrivalsContainer.innerHTML += createArrivalCard(product);

});

// =========================
// Carrito
// =========================

document.addEventListener("click", (event) => {

    // =========================
// Favoritos
// =========================

const favoriteButton = event.target.closest(".favorite-btn");

if (favoriteButton) {

    // Evita abrir la página del producto
    event.preventDefault();
    event.stopPropagation();

    const id = Number(favoriteButton.dataset.id);

    const product = products.find(product => product.id === id);

    console.log(product);

    if (!product) return;

    toggleFavorite(product);

    const icon = favoriteButton.querySelector("i");

    if (icon.classList.contains("bi-heart")) {

        icon.classList.remove("bi-heart");
        icon.classList.add("bi-heart-fill");

        showToast("Producto agregado a favoritos ❤️");

    } else {

        icon.classList.remove("bi-heart-fill");
        icon.classList.add("bi-heart");

        showToast("Producto eliminado de favoritos");

    }

    updateFavoriteCounter();

    return;

}


    const button = event.target.closest(".add-to-cart");

    if (!button) return;

    const productId = Number(button.dataset.id);

    const product = products.find(product => product.id === productId);

    if (!product) return;

    addProduct(product);

    renderCart();

    showToast(`${product.name} agregado al carrito.`);

    console.log(`${product.name} agregado al carrito`);

});

// =========================
// Navbar
// =========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

// =========================
// Testimonios
// =========================

const testimonialsContainer = document.getElementById("testimonialsContainer");

testimonials.forEach(testimonial => {

    testimonialsContainer.innerHTML += createTestimonialCard(testimonial);

});

renderCart();

function updateFavoriteCounter(){

    const favoriteCounter =
        document.getElementById("favoriteCounter");

    if(!favoriteCounter) return;

    const total = getTotalFavorites();

    favoriteCounter.textContent = total;

    favoriteCounter.style.display =
        total > 0 ? "block" : "none";

}

updateFavoriteCounter();