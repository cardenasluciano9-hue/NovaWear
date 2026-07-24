import { products } from "./data/products.js";
import { categories } from "./data/categories.js";
import { newArrivals } from "./data/newArrivals.js";
import { testimonials } from "./data/testimonials.js";

import { createProductCard } from "./components/productCard.js";
import { createCategoryCard } from "./components/categoryCard.js";
import { createArrivalCard } from "./components/arrivalCard.js";
import { createTestimonialCard } from "./components/testimonialCard.js";

// =========================
// Productos Destacados
// =========================

const featuredProducts = document.getElementById("featuredProducts");

products.forEach(product => {

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
// Nuevos Ingresos
// =========================

const newArrivalsContainer = document.getElementById("newArrivals");

newArrivals.forEach(product => {

    newArrivalsContainer.innerHTML += createArrivalCard(product);

});

// =========================
// Testimonios
// =========================

const testimonialsContainer = document.getElementById("testimonialsContainer");

testimonials.forEach(testimonial => {

    testimonialsContainer.innerHTML += createTestimonialCard(testimonial);

});

// =========================
// Navbar
// =========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 40){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});