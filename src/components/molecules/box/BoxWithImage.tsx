import "./BoxWithImage.scss";

import { JSX, children } from "solid-js";

interface BoxWithImageProps {
  image: string;
  children: JSX.Element;
}

export function BoxWithImage(props: BoxWithImageProps) {
  const c = children(() => props.children);
  return (
    <div class="box-with-image" style={{ "background-image": props.image }}>
      {c()}
    </div>
  );
}
