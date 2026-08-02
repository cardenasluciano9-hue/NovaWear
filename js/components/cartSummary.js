export function createCartSummary(cart) {

    const subtotal = cart.reduce((total, product) => {

        return total + (product.price * product.quantity);

    }, 0);

    return `

        <div class="cart-summary">

            <div class="summary-row">

                <span>

                    Subtotal

                </span>

                <strong>

                    $${subtotal.toLocaleString("es-AR")}

                </strong>

            </div>

            <div class="summary-row">

                <span>

                    Envío

                </span>

                <strong class="text-success">

                    Gratis

                </strong>

            </div>

            <hr>

            <div class="summary-row total">

                <span>

                    Total

                </span>

                <strong>

                    $${subtotal.toLocaleString("es-AR")}

                </strong>

            </div>

            <button class="btn-primary-custom w-100 mt-3">

                <i class="bi bi-credit-card"></i>

                Finalizar compra

            </button>

        </div>

    `;

}