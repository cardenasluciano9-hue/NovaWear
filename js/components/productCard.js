import { isFavorite } from "../services/favoriteService.js";

export function createProductCard(product) {

    const imagePath = window.location.pathname.includes("/pages/")
        ? `../${product.images[0]}`
        : product.images[0];

    const productLink = window.location.pathname.includes("/pages/")
        ? `product.html?id=${product.id}`
        : `pages/product.html?id=${product.id}`;

    return `

        <div class="col-lg-3 col-md-6 col-sm-6">

            <div class="product-card">

                <div class="product-image">

                    <a href="${productLink}" class="text-decoration-none">

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

                <div class="product-info">

                    <span class="product-category">

                        ${product.category}

                    </span>

                    <h3>

                        <a
                            href="${productLink}"
                            class="text-decoration-none text-dark">

                            ${product.name}

                        </a>

                    </h3>

                    <div class="product-rating">

                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-half"></i>

                        <span>(${product.reviews})</span>

                    </div>

                    <div class="product-price">

                        $${product.price.toLocaleString("es-AR")}

                    </div>

                    <div class="product-shipping">

                        ${
                            product.shipping
                                ? `<i class="bi bi-truck"></i> Envío gratis`
                                : `<span class="text-muted">Sin envío gratis</span>`
                        }

                    </div>

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