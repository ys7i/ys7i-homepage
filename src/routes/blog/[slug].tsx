import { createEffect, Show } from "solid-js";
import { Meta, Title, useParams, useRouteData } from "solid-start";
import { getBlogEntry } from "~/api/contentful";
import { CircleLoading } from "~/components/atoms/loading/CircleLoading";
import { BlogDetail } from "~/components/template/blog/BlogDetail";
import { createServerData$ } from "solid-start/server";

type RouteDataProps = { params: { slug: string } };

export function routeData(props: RouteDataProps) {
  return createServerData$(
    async ([, slug]) => {
      return await getBlogEntry(slug);
    },
    { key: () => ["slug", props.params.slug] }
  );
}

export default function Home() {
  const entry = useRouteData<typeof routeData>();
  const params = useParams<{ slug: string }>();

  createEffect(() => {
    if (entry()?.id && entry()?.id !== params.slug) {
      location.reload();
    }
  }, []);
  return (
    <main style={{ "margin-bottom": "-10vh" }}>
      <Title>{entry()?.title}</Title>
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
