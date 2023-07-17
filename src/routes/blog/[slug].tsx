import { createResource, Show } from "solid-js";
import { Title, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getBlogEntry } from "~/api/contentful";
import { CircleLoading } from "~/components/atoms/loading/CircleLoading";
import { BlogDetail } from "~/components/template/blog/BlogDetail";

type RouteDataProps = { params: { slug: string } };

export function routeData({ params: { slug } }: RouteDataProps) {
  return createServerData$(
    ([slug]) => {
      return getBlogEntry(slug);
    },
    { key: () => [slug] }
  );
}

export default function Home() {
  const entry = useRouteData<typeof routeData>();
  return (
    <main style={{ "margin-bottom": "-10vh" }}>
      <Title>ys7i.com</Title>
      <div style={{ height: "100px" }}></div>
      <Show when={Boolean(entry())} fallback={<CircleLoading />}>
        <BlogDetail content={entry() ?? null} />
      </Show>
    </main>
  );
}
