import { For } from "solid-js";

import { EntryBlogResource } from "~/api/contentful";
import { TypedText } from "~/components/atoms/text/TypedText";
import { BlogCard } from "~/components/organisms/card/BlogCard";
import { CoverBackground } from "~/components/molecules/cover/CoverBackground";
import "./BlogArchive.scss";

interface BlogBodyProps {
  entries: EntryBlogResource;
}

export function BlogArchive({ entries }: BlogBodyProps) {
  return (
    <>
      <CoverBackground src="/backgrounds/blog-top.jpg">
        <div class="blog-top">
          <TypedText text={["Blog"]} speed="normal" />
        </div>
      </CoverBackground>

      <div class="archive-posts">
        <For each={entries()}>
          {(entry) => {
            return (
              <div class="blog-card-wrapper">
                <BlogCard
                  title={entry.title}
                  image={`https:${entry.photo.fields.file.url}`}
                  description={entry.summary}
                  createdAt={entry.createdAt}
                  id={entry.id}
                />
              </div>
            );
          }}
        </For>
      </div>
    </>
  );
}
