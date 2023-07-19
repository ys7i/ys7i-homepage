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
  Title,
  useIsRouting,
} from "solid-start";
import "./root.scss";
import { Header } from "./components/organisms/header/Header";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { isServer } from "solid-js/web";
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
        <Title>Yuhi Sakaguchi Personal Site</Title>
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta property="og:image" content="/ogp/ogp-photo.jpg" />
        <Meta
          name="description"
          property="og:description"
          content="I am a graduate
                    student and freelance software engineer. I have
                    experience in both front-end and back-end development, and I
                    excel at adapting to a wide range of technologies."
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
