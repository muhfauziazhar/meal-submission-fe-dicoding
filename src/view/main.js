import '../components/meal-list.js';
import '../components/search-bar.js';
import axios from 'axios';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const mealListElement = document.querySelector('meal-list');

  const onButtonSearchClicked = async () => {
    try {
      const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchElement.value}`,
      );
      renderResult(response.data.meals);
    } catch (error) {
      fallbackResult();
    }
  };

  const renderResult = (results) => {
    mealListElement.meals = results;
  };

  const fallbackResult = () => {
    mealListElement.renderError();
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
