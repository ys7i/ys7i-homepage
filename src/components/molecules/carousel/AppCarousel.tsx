import "./AppCarousel.scss";
import "swiper/scss";

import "swiper/scss/navigation";
import { For, JSX, children } from "solid-js";

interface AppCarouselProps {
  items: JSX.Element[];
}

export function AppCarousel({ items }: AppCarouselProps) {
  const itemJSXes = items.map((item) => children(() => item));

  return (
    <div class="app-carousel">
      <div class="swiper">
        <div class="swiper-wrapper">
          <For each={itemJSXes}>
            {(itemJSX, index) => <div class="swiper-slide">{itemJSX()}</div>}
          </For>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  );
}
