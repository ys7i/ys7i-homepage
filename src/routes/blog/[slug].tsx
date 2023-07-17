import { createResource, Show } from "solid-js";
import { Title, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getBlogEntry } from "~/api/contentful";
import { CircleLoading } from "~/components/atoms/loading/CircleLoading";
import { CustomMeta } from "~/components/atoms/meta/Meta";
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
      <CustomMeta
        pageImg={`https:${entry()?.photo.fields.file.url}`}
        isPublicImg={false}
      />
      <Title>ys7i.com</Title>
      <Show when={Boolean(entry())} fallback={<CircleLoading />}>
        <BlogDetail content={entry() ?? null} />
      </Show>
    </main>
  );
}
