let navItem = document.querySelectorAll(".nav__item");
let navList = document.querySelector(".nav__list");
let subNavItems = document.querySelectorAll(".sub-nav__item");
const burger = document.querySelector('.burger');


for (const item of navItem) {
  item.addEventListener("click", () => {
    navList.classList.remove("menu--active");
    document.body.classList.remove("dis-scroll");
    burger.classList.remove('burger--active');
  });
}

subNavItems.forEach((element) => {
  element.addEventListener("click", () => {
    navList.classList.remove("menu--active");
    document.body.classList.remove("dis-scroll");
    burger.classList.remove('burger--active');
  });
});
