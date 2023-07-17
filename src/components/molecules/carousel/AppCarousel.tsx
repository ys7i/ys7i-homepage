import "./AppCarousel.scss";
import "swiper/scss";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/scss/navigation";
import { For, JSX, children, createEffect } from "solid-js";

interface AppCarouselProps {
  items: JSX.Element[];
}

export function AppCarousel({ items }: AppCarouselProps) {
  const itemJSXes = items.map((item) => children(() => item));
  createEffect(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Navigation],
      centeredSlides: true,
      loop: true,
      slidesPerView: 1.5,
      spaceBetween: 200,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1300: {
          slidesPerView: 3.5,
          spaceBetween: 100,
        },
        1600: {
          slidesPerView: 4,
          spaceBetween: 150,
        },
      },
    });
  });
  return (
    <div class="app-carousel">
      <div class="swiper">
        <div class="swiper-wrapper">
          <For each={itemJSXes}>
            {(itemJSX) => <div class="swiper-slide">{itemJSX()}</div>}
          </For>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  );
}
