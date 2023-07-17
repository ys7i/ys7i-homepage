import { useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getSkillEntries } from "~/api/contentful";
import { AboutBody } from "~/components/template/about/AboutBody";

export function routeData() {
  return createServerData$(async () => {
    const skills = await getSkillEntries(0);
    return skills;
  });
}

export default function Profile() {
  const entries = useRouteData<typeof routeData>();
  return (
    <main>
      <AboutBody skills={entries} />
    </main>
  );
}
