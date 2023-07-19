import { Title, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getBlogEntries } from "~/api/contentful";
import { MainBody } from "~/components/template/main/MainBody";

export function routeData() {
  return createServerData$(() => {
    return getBlogEntries(0, 6);
  });
}

export default function Home() {
  const entries = useRouteData<typeof routeData>();
  return (
    <main>
      <MainBody entries={entries} />
    </main>
  );
}
