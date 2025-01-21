const categoriesArray = ["Pizza", "Burger", "BBQ", "Sushi", "Vegan", "Desserts"];

const categoriesHTMLElement = document.querySelector(".categories");

categoriesArray.forEach((element) => {
    const category = document.createElement("div");
    const categoryIcon = document.createElement("div");
    const categoryTitle = document.createElement("div");
    const categoryIconImage = document.createElement("img");

    category.className = "category";
    categoryIcon.className = "category__icon";
    categoryTitle.className = "category__title";

    categoriesHTMLElement.append(category)
    category.append(categoryIcon);
    category.append(categoryTitle);
    categoryIcon.append(categoryIconImage);

    categoryTitle.innerText = element;
    categoryIconImage.setAttribute("src", `img/categories/${element.toLowerCase()}.svg`);
})

const categories = document.querySelectorAll(".category");

const addClassChecked = (event) => {
    event.currentTarget.classList.toggle("checked");
}

categories.forEach((element) => {
    element.addEventListener("click", addClassChecked)
})

const addCategoriesData = () => {
    categories.forEach((element) => {
        const categoryName = element.innerText.toLowerCase();
        element.setAttribute("data-category", categoryName)
    })
}
addCategoriesData()