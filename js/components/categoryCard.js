export function createCategoryCard(category){

    return `

        <div class="col-lg-3 col-md-6">

            <div class="category-card">

                <img src="${category.image}" alt="${category.name}">

                <div class="category-overlay">

                    <div class="category-content">

                        <h3>${category.name}</h3>

                        <span class="category-link">

                            Ver colección
                            <i class="bi bi-arrow-right"></i>

                        </span>

                    </div>

                </div>

            </div>

        </div>

    `;

}