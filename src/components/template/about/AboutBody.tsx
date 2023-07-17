import { CoverBackground } from "~/components/molecules/cover/CoverBackground";
import "./AboutBody.scss";
import { TypedText } from "~/components/atoms/text/TypedText";
import { ScrollAbout } from "./ScrollAbout";
import { Resource } from "solid-js";
import { Skill } from "~/api/contentful";
import { AppText } from "~/components/atoms/text/Text";

interface AboutBodyProps {
  skills: Resource<
    | {
        front: Skill[];
        back: Skill[];
      }
    | undefined
  >;
}

export function AboutBody({ skills }: AboutBodyProps) {
  return (
    <>
      <CoverBackground src="/backgrounds/profile-top.jpg">
        <div class="about-top">
          <TypedText text={["About"]} speed="normal" />
        </div>
      </CoverBackground>
      <ScrollAbout skills={skills} />
      <div class="contact-sentence">
        <AppText
          variant="h5"
          text="Please contact me through the Contact page."
          inputClass="accent"
        />
      </div>
      <div class="down-arrow">
        <span class="dli-caret-circle-fill-right"></span>
      </div>
    </>
  );
}
