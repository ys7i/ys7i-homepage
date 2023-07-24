import { createResource, Show } from "solid-js";
import { createRouteData, Meta, Title, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getBlogEntry } from "~/api/contentful";
import { CircleLoading } from "~/components/atoms/loading/CircleLoading";
import { BlogDetail } from "~/components/template/blog/BlogDetail";

type RouteDataProps = { params: { slug: string } };

export function routeData(props: RouteDataProps) {
  return createServerData$(
    async ([slug]) => {
      // 前のデータが引き継がれるのでretry
      const data = await getBlogEntry(slug);
      data.id = slug;
      return data;
    },
    { key: () => [props.params.slug] }
  );
}

export default function Home() {
  const entry = useRouteData<typeof routeData>();
  return (
    <main style={{ "margin-bottom": "-10vh" }}>
      <Title>{entry()?.title}</Title>
      <p style={{ color: "white" }}>{entry()?.id}</p>
      <Meta
        property="og:image"
        content={`https:${entry()?.photo.fields.file.url}`}
      />
      <Meta
        name="description"
        property="og:description"
        content={entry()?.summary}
      />
      <Show when={Boolean(entry())} fallback={<CircleLoading />}>
        <BlogDetail content={entry() ?? null} />
      </Show>
    </main>
  );
}
