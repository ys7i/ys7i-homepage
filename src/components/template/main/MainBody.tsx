import { EntryBlogResource } from "~/api/contentful";
import { BlogCover } from "~/components/organisms/main/BlogCover";
import { ProfileCover } from "~/components/organisms/main/ProfileCover";
import { TopCover } from "~/components/organisms/main/TopCover";

interface MainBodyProps {
  entries: EntryBlogResource;
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
