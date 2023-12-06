import { EntryBlogResource } from "~/api/contentful";
import "./BlogCover.scss";

import { BoxWithImage } from "~/components/molecules/box/BoxWithImage";
import { BlogCard } from "~/components/organisms/card/BlogCard";
import { AppCarousel } from "~/components/molecules/carousel/AppCarousel";
import { TypedText } from "~/components/atoms/text/TypedText";
import { Show } from "solid-js";

interface BlogCoverProps {
  entries: EntryBlogResource;
}

export function BlogCover({ entries }: BlogCoverProps) {
  return (
    <section class="blog-section">
      <div class="blog-cover-title">
        <TypedText
          text={["Blog"]}
          textAlign="center"
          speed="normal"
          loop={true}
        />
      </div>
      <div class="blog-background">
        <div class="blog-left-section">
          <BoxWithImage image="url('/backgrounds/blog-cover.jpg')">
            <div class="blog-photo-section" style={{ height: "800px" }}></div>
          </BoxWithImage>
        </div>
        <div class="blog-right-section"></div>
      </div>
      <div class="blog-carousel">
        <Show when={entries() !== undefined} fallback={<></>}>
          <AppCarousel
            items={
              entries()?.map((item) => {
                return (
                  <div id="blog-card-wrapper">
                    <BlogCard
                      title={item.title}
                      image={`https:${item.photo.fields.file.url}`}
                      description={item.summary}
                      createdAt={item.createdAt}
                      id={item.id}
                    />
                  </div>
                );
              }) ?? []
            }
          />
        </Show>
      </div>
    </section>
  );
}
