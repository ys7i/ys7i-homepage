import "./Image.scss";

type ImageProps = {
  src: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  isSticky?: boolean;
  zoomScale?: () => number;
  inputClass?: string;
};

export function AppImage({
  src,
  objectFit = "contain",
  isSticky = false,
  zoomScale = () => 1,
  inputClass,
}: ImageProps) {
  return (
    <img
      src={src}
      classList={{ sticky: isSticky, [objectFit]: true }}
      class={inputClass}
      style={{
        transform: `scale(${zoomScale()}, ${zoomScale()})`,
      }}
    />
  );
}
