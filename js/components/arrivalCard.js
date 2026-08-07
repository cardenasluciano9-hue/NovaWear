import { isFavorite } from "../services/favoriteService.js";

export function createArrivalCard(product){

    const imagePath = window.location.pathname.includes("/pages/")
        ? `../${product.images[0]}`
        : product.images[0];

    const productLink = window.location.pathname.includes("/pages/")
        ? `product.html?id=${product.id}`
        : `pages/product.html?id=${product.id}`;

    return `

        <div class="col-lg-3 col-md-6 col-sm-6">

            <div class="arrival-card">

                <div class="arrival-image">

                    <span class="arrival-badge">

                        ✨ NUEVO

                    </span>

                    <a href="${productLink}">

                        <img
                            src="${imagePath}"
                            alt="${product.name}">

                    </a>

                    <button
                        class="favorite-btn"
                        data-id="${product.id}"
                        type="button">

                        <i class="bi ${
                            isFavorite(product.id)
                                ? "bi-heart-fill"
                                : "bi-heart"
                        }"></i>

                    </button>

                </div>

                <div class="arrival-info">

                    <span class="arrival-category">

                        ${product.category}

                    </span>

                    <h3>

                        <a
                            href="${productLink}"
                            class="text-decoration-none text-dark">

                            ${product.name}

                        </a>

                    </h3>

                    <div class="arrival-rating">

                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>

                        <span>

                            (${product.reviews})

                        </span>

                    </div>

                    <div class="arrival-price">

                        $${product.price.toLocaleString("es-AR")}

                    </div>

                    ${
                        product.shipping
                        ? `
                        <div class="product-shipping">

                            <i class="bi bi-truck"></i>

                            Envío gratis

                        </div>
                        `
                        : `
                        <div class="shipping-placeholder">

                            &nbsp;

                        </div>
                        `
                    }

                    <button
                        class="btn-primary-custom w-100 add-to-cart"
                        data-id="${product.id}">

                        <i class="bi bi-cart-plus"></i>

                        Agregar al carrito

                    </button>

                </div>

            </div>

        </div>

    `;

}