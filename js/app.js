import { products } from "./data/products.js";
import { categories } from "./data/categories.js";

import { createProductCard } from "./components/productCard.js";
import { createCategoryCard } from "./components/categoryCard.js";

// =========================
// Productos
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