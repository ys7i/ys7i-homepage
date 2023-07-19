import "./root.scss";

import { createSignal, Show, Suspense } from "solid-js";
import { Footer } from "~/components/organisms/footer/Footer";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  useIsRouting,
} from "solid-start";
import "./root.scss";
import { Header } from "./components/organisms/header/Header";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { isServer } from "solid-js/web";
import { CustomMeta } from "./components/atoms/meta/Meta";
import { CircleLoading } from "./components/atoms/loading/CircleLoading";

export default function Root() {
  const [isOverflowHidden, setIsOverflowHidden] = createSignal(false);
  const isRouting = useIsRouting();
  if (!isServer) {
    gsap.registerPlugin(ScrollTrigger);
  }
  return (
    <Html lang="en">
      <Head>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <CustomMeta
          pageTitle="Yuhi Sakaguchi Personal Site"
          pageImg="/public/ogp-photo.jpg"
        />
      </Head>
      <Body classList={{ "overflow-hidden": isOverflowHidden() }}>
        <Suspense>
          <ErrorBoundary>
            <Header setOverFlowHidden={setIsOverflowHidden} />
            <Show when={!isRouting()} fallback={<CircleLoading />}>
              <Routes>
                <FileRoutes />
              </Routes>
              <Footer />
            </Show>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
