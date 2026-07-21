export function createProductCard(product) {

    return `

        <div class="col-lg-3 col-md-6 col-sm-6">

            <div class="product-card">

                <div class="product-image">

                    <img src="${product.image}" alt="${product.name}">

                    <button class="favorite-btn">

                        <i class="bi bi-heart"></i>

                    </button>

                </div>

                <div class="product-info">

                    <span class="product-category">
                        ${product.category}
                    </span>

                    <h3>
                        ${product.name}
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
                            : `<span class="text-muted"> Sin envío gratis</span>`
                        }
                    </div>


                    <button class="btn-primary-custom w-100">

                        <i class="bi bi-cart-plus"></i>

                        Agregar al carrito

                    </button>

                </div>

            </div>

        </div>

    `;

}
export const categories = [
    {
        id: 1,
        name: "Remeras",
        icon: "bi bi-shirt",
        image: "img/categories/remeras.jpg"
    },

    {
        id: 2,
        name: "Pantalones",
        icon: "bi bi-bag",
        image: "img/categories/pantalones.jpg"
    },

    {
        id: 3,
        name: "Camperas",
        icon: "bi bi-cloud-snow",
        image: "img/categories/camperas.jpg"
    },

    {
        id: 4,
        name: "Calzado",
        icon: "bi bi-stars",
        image: "img/categories/calzado.jpg"
    }
];
