import chickenImage from "./roastedchicken.png";
import fullMealImage from "./full-meal.png";
import veggiesImage from "./veggies.png";

import { secondMeal } from "./meal2";
import { thirdMeal } from "./meal3";

import "./styles.css";
const image = document.createElement("img");
const content = document.querySelector("#content");
const description = document.querySelector("#description");
const mealHeading = document.querySelector("#mealheading");


const meal1 = document.getElementById("roastedChicken");
meal1.addEventListener("click", () => {
    image.src = chickenImage;
    mealHeading.textContent = "Roasted Chicken: ";
    description.textContent = "First Meal description: " +
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti blanditiis officiis repellendus repellat quas laudantium libero? At, velcommodi quia animi sint totam harum enim eaque facilis quasi nam vero.";
});

const meal2 = document.getElementById("fullMeal");
meal2.addEventListener("click", () => {
    image.src = fullMealImage;
    secondMeal()
})

const meal3 = document.getElementById("veggies");
meal3.addEventListener("click", () => {
    image.src = veggiesImage;
    thirdMeal()
})
content.appendChild(image);