import { products } from "./data/products.js";
import { categories } from "./data/categories.js";
import { testimonials } from "./data/testimonials.js";

import { createProductCard } from "./components/productCard.js";
import { createCategoryCard } from "./components/categoryCard.js";
import { createArrivalCard } from "./components/arrivalCard.js";
import { createTestimonialCard } from "./components/testimonialCard.js";

import { addProduct } from "./services/cartService.js";

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

    const button = event.target.closest(".add-to-cart");

    if (!button) return;

    const productId = Number(button.dataset.id);

    const product = products.find(product => product.id === productId);

    if (!product) return;

    addProduct(product);

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