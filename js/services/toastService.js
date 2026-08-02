// ======================================
// TOAST SERVICE
// ======================================

export function showToast(message) {

    const toastElement = document.getElementById("cartToast");

    const toastMessage = document.getElementById("toastMessage");

    toastMessage.textContent = message;

    const toast = new bootstrap.Toast(toastElement, {

        delay: 2500

    });

    toast.show();

}