const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEl = document.getElementById('single-meal');

function searchMeal(e) {
  e.preventDefault();

  //   single_mealEl.innerHTML = '';

  const term = search.value;

  // check if search is empty
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results.Try Again</p>`;
        } else {
          mealsEl.innerHTML = data.meals
            .map(
              (meal) =>
                `<div class="meal">
                    <img src="${meal.strMealThumb}" alt="${meal.strMealThumb}" />
                    <div class="meal-info" data-mealID="${meal.idMeal}">
                        <h3>${meal.strMeal}</h3>
                    </div>
                </div>
                `
            )
            .join('');
        }
      });
    search.value = '';
  } else {
    alert('Please enter an item to search');
  }
}

submit.addEventListener('submit', searchMeal);
