export function createCartItem(product) {

    const subtotal = product.price * product.quantity;

    const imagePath = window.location.pathname.includes("/pages/")
        ? `../${product.images[0]}`
        : product.images[0];

    return `

        <div class="cart-item">

            <div class="cart-item-image">

                <img
                    src="${imagePath}"
                    alt="${product.name}">

            </div>

            <div class="cart-item-info">

                <div class="cart-item-header">

                    <div>

                        <h5>${product.name}</h5>

                        <span class="cart-category">

                            ${product.category}

                        </span>

                    </div>

                    <button
                        class="remove-btn"
                        data-id="${product.id}">

                        <i class="bi bi-trash3"></i>

                    </button>

                </div>

                <div class="cart-rating">

                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>

                    <span>

                        (${product.reviews})

                    </span>

                </div>

                <div class="cart-price">

                    $${product.price.toLocaleString("es-AR")}

                </div>

                ${
                    product.shipping
                        ? `
                        <div class="cart-shipping">

                            <i class="bi bi-truck"></i>

                            Envío gratis

                        </div>
                        `
                        : ""
                }

                <div class="cart-bottom">

                    <div class="cart-quantity-section">

                        <div class="cart-bottom-header">

                            <small class="cart-label">

                                Cantidad

                            </small>

                            <small class="cart-label">

                                Subtotal

                            </small>

                        </div>

                        <div class="cart-bottom-content">

                            <div class="cart-quantity">

                                <button
                                    class="quantity-btn decrease"
                                    data-id="${product.id}">

                                    <i class="bi bi-dash"></i>

                                </button>

                                <span>

                                    ${product.quantity}

                                </span>

                                <button
                                    class="quantity-btn increase"
                                    data-id="${product.id}">

                                    <i class="bi bi-plus"></i>

                                </button>

                            </div>

                            <strong class="cart-subtotal-price">

                                $${subtotal.toLocaleString("es-AR")}

                            </strong>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    `;

}