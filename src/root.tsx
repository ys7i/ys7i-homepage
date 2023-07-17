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
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { isServer } from "solid-js/web";

export default function Root() {
  const [isOverflowHidden, setIsOverflowHidden] = createSignal(false);
  if (!isServer) {
    gsap.registerPlugin(ScrollTrigger);
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
