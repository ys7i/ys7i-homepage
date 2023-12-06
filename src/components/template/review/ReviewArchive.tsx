import { AppText } from "~/components/atoms/text/Text";
import { TypedText } from "~/components/atoms/text/TypedText";
import { CoverBackground } from "~/components/molecules/cover/CoverBackground";
import "./ReviewArchive.scss";
import { EntryReviewResource } from "~/api/contentful";
import { For } from "solid-js";
import { ReviewCard } from "~/components/organisms/card/ReviewCard";
import { Grid } from "@suid/material";

type Props = {
  reviews: EntryReviewResource;
};

export function ReviewArchive({ reviews }: Props) {
  return (
    <>
      <CoverBackground src="/backgrounds/review-top.jpg">
        <div class="review-top">
          <TypedText text={["Review"]} speed="normal" colorClass="primary" />
        </div>
      </CoverBackground>

      <div id="review-wrapper">
        <div class="review-text">
          <AppText variant="h2" text="Archive" />
        </div>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          gap={2}
          rowSpacing={4}
        >
          <For each={reviews()}>
            {(entry) => {
              return (
                <Grid item>
                  <ReviewCard
                    title={entry.title}
                    image={`https:${entry.photo.fields.file.url}`}
                    summary={entry.summary}
                    createdAt={entry.createdAt}
                    id={entry.id}
                  />
                </Grid>
              );
            }}
          </For>
        </Grid>
      </div>
    </>
  );
}
