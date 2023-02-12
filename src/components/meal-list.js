import "./meal-item.js";

class MealList extends HTMLElement {
    set meals(meals) {
        this._meals = meals;
        this.render();
    }

    render() {
        this.innerHTML = ``;
        this._meals.forEach((meal) => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meal = meal;
            mealItemElement.className = "col-lg-3 col-md-6 col-sm-12";
            this.appendChild(mealItemElement);
        });
    }

    renderError() {
        this.innerHTML = "";
        this.innerHTML += `<h4>Mohon maaf bahan yang anda cari tidak terdapat di dalam database kami.</h4>`;
    }
}

customElements.define("meal-list", MealList);
