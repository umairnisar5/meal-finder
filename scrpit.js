const search = document.getElementById('search'),
submit = document.getElementById('submit'),
random = document.getElementById('random'),
mealsEl = document.getElementById('meals'),
resultHeading = document.getElementById('result-heading'),
single_mealEl = document.getElementById('single-meal');

//search meal and fetch from API
function  searchMeal(e){
e.perventDefault();

//clear single meal
single_mealEl.innerHTML = '';

//get search term
const term = search.value;

//check for empty 
if(term.trim()) {
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${trem}')
.then(res => res.json)
.then(data =>{
    Console.log(data);
    resultHeading.innerHTML = '<h2>search result for '$ {term}':</h2>'
    if(data.meals === null) {
        resultHeading.innerHTML =' <p> there are no search .try again </p>';
    } else {
mealsEl.innerHTML = data.meals.map(meal => 
    <div class="meal">
        <img src="$(meal.strMe)"/>
        </div>
    }
}
} else {
    alert('please enter a search term');
}
}
//event listenners
submit.addEventListener('submit', searchMeal);