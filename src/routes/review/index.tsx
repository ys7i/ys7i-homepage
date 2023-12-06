import { Meta, Title, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { getReviewEntries, ReviewPost } from "~/api/contentful";
import { ReviewArchive } from "~/components/template/review/ReviewArchive";

export function routeData() {
  return createServerData$(() => {
    return getReviewEntries(0);
  });
}

export default function Review() {
  const entries = useRouteData<typeof routeData>();
  return (
    <main>
      <Title>Review</Title>
      <Meta
        name="og:description"
        content="Review Page of Yuhi Sakaguchi Personal Site. I will introduce some gadgets and home appliances."
      />
      <ReviewArchive reviews={entries} />
    </main>
  );
}
