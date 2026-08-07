// ======================================
// FAVORITES SERVICE
// ======================================

const STORAGE_KEY = "novawear-favorites";

// Obtener favoritos
export function getFavorites(){

    const favorites = localStorage.getItem(STORAGE_KEY);

    return favorites ? JSON.parse(favorites) : [];

}

// Guardar favoritos
function saveFavorites(favorites){

    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));

}

// Agregar o quitar favorito
export function toggleFavorite(product){

    const favorites = getFavorites();

    const index = favorites.findIndex(item => item.id === product.id);

    if(index >= 0){

        favorites.splice(index,1);

    }else{

        favorites.push(product);

    }

    saveFavorites(favorites);

}

// Saber si un producto es favorito
export function isFavorite(id){

    return getFavorites().some(product => product.id === id);

}

// Cantidad de favoritos
export function getTotalFavorites(){

    return getFavorites().length;

}