export function secondMeal() {
    const description = document.querySelector("#description");
    const mealHeading = document.querySelector("#mealheading");

    mealHeading.textContent = "Our Best Meal: ";

    description.textContent =
        "Second Meal description: " +
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti blanditiis officiis repellendus repellat quas laudantium libero? At, velcommodi quia animi sint totam harum enim eaque facilis quasi nam vero.";

}