export function createArrivalCard(product){

    return `

        <div class="col-lg-3 col-md-6 col-sm-6">

            <div class="arrival-card">

                <div class="arrival-image">

                    <span class="arrival-badge">

                        ✨ NUEVO

                    </span>

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <button class="favorite-btn">

                        <i class="bi bi-heart"></i>

                    </button>

                </div>

                <div class="arrival-info">

                    <span class="arrival-category">

                        ${product.category}

                    </span>

                    <h3>

                        ${product.name}

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