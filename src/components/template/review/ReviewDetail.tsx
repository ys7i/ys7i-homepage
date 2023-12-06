import { ReviewPost } from "../../../api/contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Alert, AlertTitle, Box } from "@suid/material";
import { createEffect, createSignal, JSXElement, Show } from "solid-js";
import { CircleLoading } from "~/components/atoms/loading/CircleLoading";
import { CoverBackground } from "~/components/molecules/cover/CoverBackground";
import { TypedText } from "~/components/atoms/text/TypedText";

import "./ReviewDetail.scss";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { AppImage } from "~/components/atoms/image/Image";

type Props = {
  content: ReviewPost;
};

export function ReviewDetail({ content }: Props) {
  const [cleanHTML, setCleanHTML] = createSignal("");

  createEffect(() => {
    if (content?.content && cleanHTML() === "") {
      const hl = DOMPurify.sanitize(marked(content.content ?? ""));
      setCleanHTML(hl);
    }
  });
  return (
    <Box id="review-detail">
      <CoverBackground src="/backgrounds/review-top.jpg">
        <Box class="review-top">
          <TypedText text={["Review"]} speed="normal" colorClass="primary" />
        </Box>
      </CoverBackground>
      <Show when={content.precautionaryStatement}>
        <Alert
          severity="success"
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          {content.precautionaryStatement}
        </Alert>
      </Show>
      <h1 id="review-content-title">{content.title}</h1>
      <div id="review-image">
        <AppImage
          src={`https:${content.photo.fields.file.url}`}
          objectFit="contain"
        />
      </div>
      <Show when={cleanHTML() !== null} fallback={<CircleLoading />}>
        <Box id="review-content" innerHTML={cleanHTML()}></Box>
      </Show>
    </Box>
  );
}
