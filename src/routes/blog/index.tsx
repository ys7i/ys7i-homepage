import { createResource } from "solid-js";
import { Title, useRouteData } from "solid-start";
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
      <Title>ys7i.com</Title>
      <BlogArchive entries={entries} />
    </main>
  );
}
