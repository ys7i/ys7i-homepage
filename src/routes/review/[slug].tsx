import { createEffect, Show } from "solid-js";
import { Meta, Title, useParams, useRouteData } from "solid-start";
import { getReviewEntry } from "~/api/contentful";
import { CircleLoading } from "~/components/atoms/loading/CircleLoading";
import { BlogDetail } from "~/components/template/blog/BlogDetail";
import { createServerData$ } from "solid-start/server";
import { ReviewDetail } from "~/components/template/review/ReviewDetail";
import { CircularProgress } from "@suid/material";

type RouteDataProps = { params: { slug: string } };

export function routeData(props: RouteDataProps) {
  return createServerData$(
    async ([, slug]) => {
      return await getReviewEntry(slug);
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
    <main>
      <Meta
        property="og:image"
        content={`https:${entry()?.photo.fields.file.url}`}
      />
      <Meta
        name="description"
        property="og:description"
        content={entry()?.summary}
      />
      <Show
        when={entry() && entry()?.id === params.slug}
        fallback={<CircleLoading />}
      >
        <Title>{entry()?.title}</Title>
        <Show when={!!entry()} fallback={<CircularProgress />}>
          <ReviewDetail content={entry()!} />
        </Show>
      </Show>
    </main>
  );
}
