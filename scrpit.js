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

} else {
    alert('please enter a search term');
}
}
//event listenners
submit.addEventListener('submit',searchMeal);