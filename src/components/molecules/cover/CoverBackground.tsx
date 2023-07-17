import {
  children,
  createEffect,
  createSignal,
  JSXElement,
  onCleanup,
} from "solid-js";
import { AppImage } from "~/components/atoms/image/Image";
import { CustomMeta } from "~/components/atoms/meta/Meta";
import "./CoverBackground.scss";

interface CoverBackgroundProps {
  src: string;
  children: JSXElement;
  heightVH?: number;
}

export function CoverBackground(props: CoverBackgroundProps) {
  const [scrollPosition, setScrollPosition] = createSignal(0);
  const child = children(() => props.children);

  const handleScroll = () => {
    setScrollPosition(window.pageYOffset);
  };

  const zoomScale = () => 1 + scrollPosition() / 2000;

  createEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  const height = props.heightVH ?? 90;

  return (
    <section class="cover-section" style={{ height: `${height}vh` }}>
      <CustomMeta pageImg={props.src} />
      <div class="cover-image" style={{ height: `${height}vh` }}>
        <AppImage
          src={props.src}
          objectFit="cover"
          isSticky={true}
          zoomScale={zoomScale}
        />
      </div>
      {child()}
    </section>
  );
}
