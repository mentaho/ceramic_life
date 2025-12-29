import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "purecss/build/grids-min.css";
import "purecss/build/grids-responsive-min.css";
import "/src/sass/style.scss";

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".icon-right-open",
    prevEl: ".icon-left-open",
  },
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    // when window width is >= 1920px
    1920: {
      slidesPerView:3,
      spaceBetween: 35,
    },
  },

  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});
