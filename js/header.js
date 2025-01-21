//sing in verification
const singIn = false;
const singInMenuOption = document.querySelector(".sing-in-link");
const singInMenu = document.querySelector(".sing-in");

const showSingInOption = () => {
    singInMenuOption.classList.add("hide");
    singInMenu.classList.remove("hide");
}

const showSingInMenu = () => {
    singInMenuOption.classList.remove("hide");
    singInMenu.classList.add("hide");
}

if (singIn) {
    showSingInOption();
} else {
    showSingInMenu();
}