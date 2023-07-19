import { createResource } from "solid-js";
import { Meta, Title, useRouteData } from "solid-start";
import { BlogArchive } from "~/components/template/blog/BlogArchive";
import { getBlogEntries } from "~/api/contentful";
import { createServerData$ } from "solid-start/server";

export function routeData() {
  return createServerData$(() => {
    return getBlogEntries(0);
  });
}

export default function Blog() {
  const entries = useRouteData<typeof routeData>();
  return (
    <main>
      <Title>ys7i.com Blog Archive</Title>
      <Meta
        name="og:description"
        content="This page is the archive of my blog."
      />
      <BlogArchive entries={entries} />
    </main>
  );
}
