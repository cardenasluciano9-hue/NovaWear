// ======================================
// CART SERVICE
// ======================================

const STORAGE_KEY = "novawear-cart";

// Obtener carrito
export function getCart() {

    const cart = localStorage.getItem(STORAGE_KEY);

    return cart ? JSON.parse(cart) : [];

}

// Guardar carrito
function saveCart(cart) {

    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));

}

// Agregar producto al carrito
export function addProduct(product) {

    const cart = getCart();

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {

        existingProduct.quantity++;

    } else {

        cart.push({

            ...product,
            quantity: 1

        });

    }

    saveCart(cart);

}