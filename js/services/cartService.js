// ======================================
// CART SERVICE
// ======================================

const STORAGE_KEY = "novawear-cart";

// ======================================
// Obtener carrito
// ======================================

export function getCart() {

    const cart = localStorage.getItem(STORAGE_KEY);

    return cart ? JSON.parse(cart) : [];

}

// ======================================
// Guardar carrito
// ======================================

function saveCart(cart) {

    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));

}

// ======================================
// Agregar producto
// ======================================

export function addProduct(product, quantity = 1){

    const cart = getCart();

    const existingProduct = cart.find(item => item.id === product.id);

    if(existingProduct){

        existingProduct.quantity += quantity;

    }else{

        cart.push({

            ...product,

            quantity

        });

    }

    saveCart(cart);

}

// ======================================
// Aumentar cantidad
// ======================================

export function increaseQuantity(id) {

    const cart = getCart();

    const product = cart.find(item => item.id === id);

    if (!product) return;

    product.quantity++;

    saveCart(cart);

}

// ======================================
// Disminuir cantidad
// ======================================

export function decreaseQuantity(id) {

    const cart = getCart();

    const product = cart.find(item => item.id === id);

    if (!product) return;

    product.quantity--;

    if (product.quantity <= 0) {

        removeProduct(id);

        return;

    }

    saveCart(cart);

}

// ======================================
// Eliminar producto
// ======================================

export function removeProduct(id) {

    const cart = getCart().filter(item => item.id !== id);

    saveCart(cart);

}

// ======================================
// Cantidad total de artículos
// ======================================

export function getTotalItems() {

    const cart = getCart();

    return cart.reduce((total, product) => {

        return total + product.quantity;

    }, 0);

}

// Total del carrito
export function getCartTotal() {

    const cart = getCart();

    return cart.reduce((total, product) => {

        return total + (product.price * product.quantity);

    }, 0);

}