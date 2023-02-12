class MealItem extends HTMLElement {
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="meal-item meal-hover" data-id="${this._meal.idMeal}">
                <div class="meal-img">
                    <img src="${this._meal.strMealThumb}" alt="food">
                </div>
                <div class="meal-name">
                    <h3 class="text-center fw-bold">${this._meal.strMeal}</h3>
                    <a href="#" class="recipe-btn d-flex justify-content-center align-items-stretch btn btn-outline-warning">Lihat Resep</a>
                </div>
            </div>
        `;
    }
}

customElements.define("meal-item", MealItem);
