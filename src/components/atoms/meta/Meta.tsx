import { Show } from "solid-js";
import { Meta } from "solid-start";

interface MetaProps {
  pageTitle?: string;
  pageDescription?: string;
  pageImg?: string;
  isPublicImg?: boolean;
}

export function CustomMeta({
  pageTitle,
  pageDescription,
  pageImg,
  isPublicImg = true,
}: MetaProps) {
  return (
    <head>
      <Meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://ys7i.com" />
      <Show when={pageTitle} fallback={<></>}>
        <Meta property="og:title" content={pageTitle} />
      </Show>
      <Show when={pageDescription} fallback={<></>}>
        <Meta property="og:description" content={pageDescription} />
      </Show>
      <Show when={pageImg} fallback={<></>}>
        <Meta
          property="og:image"
          content={isPublicImg ? `https://ys7i.com${pageImg}` : pageImg}
        />
      </Show>
      <Meta charset="utf-8" />
      <Meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
  );
}
