const ptWeight = document.querySelector("body #userweight")
const eatProtein = document.querySelector("body #eatprotein")
const delProtein = document.querySelector("body #delprotein")

const proteinForm = document.querySelector("#protein-form")
const proteinInput = document.querySelector("#protein-form input")

const cal = document.querySelector("body #cal")

const USER_WEIGHT = "userweight"
const EAT_PROTEIN = "eatpt"
const CALORIE = "calories"

function weightSubmit(event) {
    event.preventDefault();
    const userweight = proteinInput.value;
    localStorage.setItem(USER_WEIGHT, userweight)
     
    const weightnumber = parseInt(userweight)
    const eatpt = (weightnumber * 1.5)
    localStorage.setItem(EAT_PROTEIN, eatpt)

    const calories = (weightnumber * 24 * 1.5)
    localStorage.setItem(CALORIE, calories)

    proteinForm.classList.add(HIDDEN_CLASSNAME)
    paintProtein(userweight)
    paintEatProtein(eatpt)
    paintCal(calories)
    location.reload()
}

function paintProtein(userweight) {
    ptWeight.classList.remove(HIDDEN_CLASSNAME)
    ptWeight.innerText = `My Weight: ${userweight}kg`
}

function paintEatProtein(eatpt) {
    eatProtein.classList.remove(HIDDEN_CLASSNAME)
    eatProtein.innerText = `Daily protein intake : ${eatpt}g`
}
function paintCal(calories) {
    cal.classList.remove(HIDDEN_CLASSNAME)
    cal.innerText = `Total calories per day : ${calories}kcal`
}
function paintDelProtein() {
    delProtein.classList.remove(HIDDEN_CLASSNAME)
}
const savedUserWeight = localStorage.getItem(USER_WEIGHT);
const savedEatProtein = localStorage.getItem(EAT_PROTEIN);
const savedCalories = localStorage.getItem(CALORIE)

if(savedUserWeight === null) {
    proteinForm.classList.remove(HIDDEN_CLASSNAME)
    proteinForm.addEventListener("submit", weightSubmit)
} else {
    paintProtein(savedUserWeight)
    paintEatProtein(savedEatProtein)
    paintCal(savedCalories)
    paintDelProtein()

}

function clickDelProtein () {
    localStorage.removeItem(EAT_PROTEIN)
    localStorage.removeItem(USER_WEIGHT)
    location.reload()
}
delProtein.innerText = "재입력"
delProtein.addEventListener("click", clickDelProtein)