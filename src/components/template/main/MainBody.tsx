import { EntryResource } from "~/api/contentful";
import { BlogCover } from "~/components/organisms/main/BlogCover";
import { ProfileCover } from "~/components/organisms/main/ProfileCover";
import { TopCover } from "~/components/organisms/main/TopCover";

interface MainBodyProps {
  entries: EntryResource;
}

export function MainBody({ entries }: MainBodyProps) {
  return (
    <>
      <TopCover />
      <ProfileCover />
      <BlogCover entries={entries} />
    </>
  );
}
