import "./root.scss";

import { createSignal, Suspense } from "solid-js";
import { Footer } from "~/components/organisms/footer/Footer";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.scss";
import { Header } from "./components/organisms/header/Header";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { isServer } from "solid-js/web";

export default function Root() {
  const [isOverflowHidden, setIsOverflowHidden] = createSignal(false);
  if (!isServer) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (typeof window !== "undefined") {
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
  }
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body classList={{ "overflow-hidden": isOverflowHidden() }}>
        <Suspense>
          <ErrorBoundary>
            <Header setOverFlowHidden={setIsOverflowHidden} />
            <Routes>
              <FileRoutes />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
