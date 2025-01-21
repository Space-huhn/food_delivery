const burgerElement = document.querySelector('.header-burger');
const header = document.querySelector(".header");
const headerNav = document.querySelector(".header-nav");
const searchElement = document.querySelector(".header-search");
const firstNavigationList = document.querySelector(".first-navigation-list");
const myOrder = document.querySelector("._my-order");
const sing = document.querySelector(".sing-in");

const mobileMenu = document.createElement('div');
mobileMenu.className = "mobile-menu";
const mobilMenuList = document.createElement("ul");



const burgerMenu = () => {
    const toggleClass = () => {
        const mobileMenu = document.querySelector('.mobile-menu');
        const bodyScrollLook = document.querySelector('body');

        mobileMenu.classList.toggle('active');
        burgerElement.classList.toggle('active');
        bodyScrollLook.classList.toggle('scroll-look');
    }

    burgerElement.addEventListener('click', toggleClass);
}
burgerMenu();

const menuRestructurization = () => {
    header.append(mobileMenu);
    mobilMenuList.append(myOrder);
    mobileMenu.append(searchElement);
    mobileMenu.append(mobilMenuList);
    mobileMenu.append(firstNavigationList);
}
const menuRestorn = () => {
    const logo = document.querySelector(".header__logo");

    logo.after(searchElement);
    searchElement.after(firstNavigationList);
    sing.prepend(myOrder);
}

if (document.documentElement.clientWidth <= 767.98) {
    menuRestructurization();
}

const dinamicMenu = () => {
    let documentWidth = document.documentElement.clientWidth;
    if (documentWidth <= 767.98) {
        menuRestructurization();
    } else {
        menuRestorn();
    }
}

window.addEventListener("resize", dinamicMenu);