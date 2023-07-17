import { Title, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getBlogEntries } from "~/api/contentful";
import { MainBody } from "~/components/template/main/MainBody";

export function routeData() {
  return createServerData$(() => {
    return getBlogEntries(0, 12);
  });
}

export default function Home() {
  const entries = useRouteData<typeof routeData>();
  return (
    <main>
      <Title>ys7i.com</Title>
      <MainBody entries={entries} />
    </main>
  );
}
