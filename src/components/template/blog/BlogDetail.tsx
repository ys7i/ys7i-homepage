import { createEffect, createSignal, For, JSXElement, Show } from "solid-js";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { Chip } from "@suid/material";
import highlight from "highlight.js";
import "highlight.js/styles/vs.css";
import "./BlogDetail.scss";

import { BlogPost } from "~/api/contentful";
import { AppImage } from "~/components/atoms/image/Image";
import ClipboardJS from "clipboard";
import { CircleLoading } from "~/components/atoms/loading/CircleLoading";
import dayjs from "dayjs";

marked.setOptions({
  highlight: (code) => {
    return (
      highlight.highlightAuto(code).value +
      `<button class="clipboard" data-clipboard-text='${code.replaceAll(
        "'",
        "&#39;"
      )}'><svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height="1em" width="1em" style="overflow: visible;"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-37.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-80 128h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg></button>`
    );
  },
});

interface BlogDetailProps {
  content: BlogPost | null;
}

export function BlogDetail({ content }: BlogDetailProps) {
  const [cleanHTML, setCleanHTML] = createSignal("");
  const [tocHTML, setTocHTML] = createSignal<JSXElement[] | null>(null);

  createEffect(() => {
    if (content?.content && cleanHTML() === "") {
      const hl = DOMPurify.sanitize(marked(content.content ?? ""));
      setCleanHTML(hl);
      new ClipboardJS(".clipboard");
    }
    const boards = document.getElementsByClassName("clipboard");
    if (boards === null) {
      return;
    }
    Array.from(boards).forEach((board) => {
      board.addEventListener("click", function () {
        board.innerHTML;
        board.classList.add("copied");
        board.addEventListener("animationend", function () {
          board.classList.remove("copied");
        });
      });
    });
  });

  createEffect(() => {
    if (content?.content && tocHTML() === null) {
      const tokens = marked.lexer(content.content);
      const headings = tokens.filter(
        (token) => token.type === "heading"
      ) as unknown as marked.Tokens.Heading[];
      setTocHTML(
        headings.map((heading) => {
          const target = heading.text
            .replace(/ /g, "-")
            .replace(/[\/\\^$*+?.()|\[\]{}<>:;"'~,=@`#!%&]/g, "")
            .toLowerCase();
          return (
            <li data-depth={heading.depth}>
              <a href={`#${target}`}>{target}</a>
            </li>
          );
        })
      );
    }
  });

  return (
    <div id="detail-all-wrapper">
      <Show when={cleanHTML() !== ""} fallback={<CircleLoading />}>
        <div class="blog-detail">
          <div id="title-date">
            <h1 id="blog-detail-title" class="text-align-start">
              {content?.title ?? ""}
            </h1>
            <p>{dayjs(content?.createdAt).format("YYYY.MM.DD")}</p>
          </div>
          <div id="blog-image">
            <AppImage
              src={`https:${content?.photo.fields.file.url}`}
              objectFit="contain"
            />
          </div>
          <div id="blog-tags">
            <For each={content?.tags ?? []}>
              {(tag, i) => {
                return (
                  <Chip
                    variant="outlined"
                    label={tag}
                    sx={{ color: "inherit" }}
                  />
                );
              }}
            </For>
          </div>
          <div innerHTML={cleanHTML()} class="blog-sentences" />
        </div>
      </Show>
      <Show when={tocHTML() !== null} fallback={<></>}>
        <div id="blog-toc">
          <ul>Table of Contents</ul>
          <ul>{tocHTML()}</ul>
        </div>
      </Show>
    </div>
  );
}
