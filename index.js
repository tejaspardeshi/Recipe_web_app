import { getRecipeCard } from "./getRecipeCard.js";
import { getCuisineCard } from "./getCuisine.js";

const cardParentContainer = document.querySelector(".main");
const cuisineParentContainer = document.querySelector(".cuisine-filter");
const searchBox = document.querySelector(".input");

// Mock data for recipes
const recipes = [
  {
    ID: "1",
    "image-url":
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    TranslatedRecipeName: "Spaghetti Carbonara",
    Cuisine: "Italian",
    TotalTimeInMins: 30,
  },
  {
    ID: "2",
    "image-url":
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-masala.jpg",
    TranslatedRecipeName: "Chicken Tikka Masala",
    Cuisine: "Indian",
    TotalTimeInMins: 45,
  },
  {
    ID: "3",
    "image-url":
      "https://tse4.mm.bing.net/th/id/OIP.g1YHcYW0aAnnlPU3rtgW6AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    TranslatedRecipeName: "Sushi Roll",
    Cuisine: "Japanese",
    TotalTimeInMins: 50,
  },
  {
    ID: "4",
    "image-url":
      "https://blog.amigofoods.com/wp-content/uploads/2021/02/tacos-al-pastor.jpg",
    TranslatedRecipeName: "Tacos al Pastor",
    Cuisine: "Mexican",
    TotalTimeInMins: 35,
  },
];

// Mock data for cuisines
const cuisines = [
  { ID: "1", Cuisine: "Italian" },
  { ID: "2", Cuisine: "Indian" },
  { ID: "3", Cuisine: "Japanese" },
  { ID: "4", Cuisine: "Mexican" },
];

let searchValue = "";
let filteredArrOfRecipes = [];
let arrOfSelectedCuisine = [];

const createElement = (element) => document.createElement(element);

const getFilteredData = () => {
  filteredArrOfRecipes =
    searchValue?.length > 0
      ? recipes.filter((recipe) =>
          recipe.TranslatedRecipeName.toLowerCase().includes(searchValue),
        )
      : recipes;
  if (arrOfSelectedCuisine?.length > 0) {
    filteredArrOfRecipes =
      searchValue?.length < 1 ? recipes : filteredArrOfRecipes;
    filteredArrOfRecipes = filteredArrOfRecipes.filter((recipe) =>
      arrOfSelectedCuisine.includes(recipe.Cuisine),
    );
  }
  return filteredArrOfRecipes;
};

const searchInputHandler = (event) => {
  searchValue = event.target.value.toLowerCase();
  const filteredData = getFilteredData();
  cardParentContainer.innerHTML = "";
  getRecipeCard(filteredData, cardParentContainer, createElement);
};

const handleCusineClick = (event) => {
  const id = event.target.dataset.id;
  const isSelected = event.target.checked;
  const selectedCuisine = cuisines.reduce(
    (acc, cur) => (cur.ID === acc ? cur.Cuisine : acc),
    id,
  );
  arrOfSelectedCuisine = isSelected
    ? [...arrOfSelectedCuisine, selectedCuisine]
    : arrOfSelectedCuisine.filter((cuisine) => cuisine !== selectedCuisine);
  const filteredArrOfCuisine = getFilteredData();
  cardParentContainer.innerHTML = "";

  getRecipeCard(filteredArrOfCuisine, cardParentContainer, createElement);
};

searchBox.addEventListener("keyup", searchInputHandler);

cuisineParentContainer.addEventListener("click", handleCusineClick);

getRecipeCard(recipes, cardParentContainer, createElement);
getCuisineCard(cuisines, cuisineParentContainer, createElement);

cardParentContainer.addEventListener("click", (event) => {
  const cardId = event.target.dataset.id;
  if (cardId) {
    localStorage.clear();
    localStorage.setItem("id", cardId);
    location.href = "single-recipe.html";
  }
});
