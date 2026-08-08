import { products } from "./data/products.js";

//======================================
// ELEMENTOS DEL BUSCADOR
//======================================

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");

console.log("✅ search.js se cargó correctamente");
console.log("🔎 searchInput:", searchInput);

//======================================
// DETECTAR SI ESTAMOS DENTRO DE /pages/
//======================================

const isInsidePages =
    window.location.pathname.includes("/pages/");

//======================================
// CONTENEDOR DE RESULTADOS
//======================================

const searchResults = document.createElement("div");

searchResults.id = "searchResults";

searchResults.className = "search-results";

if (searchForm) {

    searchForm.parentElement.appendChild(searchResults);

}

//======================================
// BUSCAR PRODUCTOS
//======================================

function searchProducts(text) {

    console.log("🔍 Buscando:", text);

    const searchText = text
        .toLowerCase()
        .trim();

    if (!searchText) {

        searchResults.innerHTML = "";

        searchResults.style.display = "none";

        return;

    }

    const results = products.filter(product => {

        const name =
            product.name.toLowerCase();

        const category =
            product.category.toLowerCase();

        return (
            name.includes(searchText) ||
            category.includes(searchText)
        );

    });

    console.log("📦 Resultados encontrados:", results);

    renderResults(results);

}

//======================================
// MOSTRAR RESULTADOS
//======================================

function renderResults(results) {

    searchResults.innerHTML = "";

    if (results.length === 0) {

        searchResults.innerHTML = `

            <div class="search-no-results">

                <i class="bi bi-search"></i>

                <span>
                    No encontramos productos.
                </span>

            </div>

        `;

        searchResults.style.display = "block";

        return;

    }

    results.forEach(product => {

        const item = document.createElement("a");

        item.className = "search-result-item";

        //======================================
        // RUTA DEL PRODUCTO
        //======================================

        const productLink = isInsidePages
            ? `product.html?id=${product.id}`
            : `pages/product.html?id=${product.id}`;

        item.href = productLink;

        //======================================
        // RUTA DE LA IMAGEN
        //======================================

        const imagePath = isInsidePages
            ? `../${product.images[0]}`
            : product.images[0];

        item.innerHTML = `

            <div class="search-result-image">

                <img
                    src="${imagePath}"
                    alt="${product.name}">

            </div>

            <div class="search-result-info">

                <strong>
                    ${product.name}
                </strong>

                <span>
                    ${product.category}
                </span>

                <b>
                    $${product.price.toLocaleString("es-AR")}
                </b>

            </div>

        `;

        searchResults.appendChild(item);

    });

    searchResults.style.display = "block";

}

//======================================
// ESCRIBIR EN EL BUSCADOR
//======================================

if (searchInput) {

    searchInput.addEventListener("input", () => {

        console.log(
            "🔎 Texto escrito:",
            searchInput.value
        );

        searchProducts(searchInput.value);

    });

}

//======================================
// MOSTRAR / OCULTAR BOTÓN LIMPIAR
//======================================

if (searchInput && clearSearch) {

    searchInput.addEventListener("input", () => {

        clearSearch.style.display =
            searchInput.value.trim()
                ? "flex"
                : "none";

    });

}

//======================================
// LIMPIAR BÚSQUEDA
//======================================

if (clearSearch) {

    clearSearch.addEventListener("click", () => {

        searchInput.value = "";

        searchResults.innerHTML = "";

        searchResults.style.display = "none";

        clearSearch.style.display = "none";

        searchInput.focus();

    });

}

//======================================
// EVITAR RECARGAR LA PÁGINA
//======================================

if (searchForm) {

    searchForm.addEventListener("submit", (event) => {

        event.preventDefault();

    });

}

//======================================
// CERRAR RESULTADOS
//======================================

document.addEventListener("click", (event) => {

    if (
        !searchForm?.contains(event.target) &&
        !searchResults.contains(event.target)
    ) {

        searchResults.style.display = "none";

    }

});