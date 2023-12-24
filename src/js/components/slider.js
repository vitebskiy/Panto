import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper(".products__swiper", {
  slidesPerView: 4,
  spaceBetween: 42,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#slideNext",
    prevEl: "#slidePrev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (const btn of tabsBtns) {
  btn.addEventListener("click", function () {
    for (const btn of tabsBtns) {
      btn.classList.remove("tab-controls__btn--active");
    }

    btn.classList.add("tab-controls__btn--active");

    // Скрыть все товары
    for (const product of tabsProducts) {
      if (this.dataset.tab == "all") {
        product.classList.remove("none");
      } else {
        if (product.dataset.tabValue == this.dataset.tab) {
          product.classList.remove("none");
        } else {
          product.classList.add("none");
        }
      }
    }

    swiper.update();
  });
}
