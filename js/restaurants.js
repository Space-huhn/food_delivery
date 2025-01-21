const cardsInfoCategory = document.querySelectorAll(".card-info__category > span");
const categorisList = document.querySelector(".categories");
const restaurantsCard = document.querySelectorAll(".restaurants-card");


const categoryIcon = () => {
    cardsInfoCategory.forEach((element) => {
        const img = document.createElement("img");
        img.setAttribute("src", `img/categories/${element.innerHTML.toLowerCase()}.svg`);
        element.prepend(img);

    })
}
categoryIcon();

const addCategoriesClass = () => {
    cardsInfoCategory.forEach((element) => {
        element.closest(".restaurants-card").classList.add(`${element.innerText.toLowerCase()}`);
    })
}
addCategoriesClass();


const filter = (event) => {
    if (!event.target.closest(".category")) {
        return;
    }

    const checked = categorisList.querySelectorAll(".checked");
    let checkedArray = [];

    checked.forEach((checkedElement) => {
        checkedArray.push(checkedElement.dataset.category);
    });

    const filterElementClass = `.${checkedArray.join(".")}`;

    restaurantsCard.forEach((element) => {
        element.classList.remove("hide");

        if (checkedArray.length > 0 && !element.matches(filterElementClass)) {
            element.classList.add("hide");
        }
    });
}

categorisList.addEventListener("click", filter)