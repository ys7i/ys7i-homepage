import "./TopCover.scss";

import { AppButton } from "~/components/atoms/button/Button";
import { AppText } from "~/components/atoms/text/Text";
import { TypedText } from "~/components/atoms/text/TypedText";
import { CoverBackground } from "~/components/molecules/cover/CoverBackground";
import { useNavigate } from "solid-start";

export function TopCover() {
  const navigation = useNavigate();
  return (
    <CoverBackground src="/backgrounds/top.jpg" heightVH={90}>
      <div class="top-cover-text">
        <TypedText text={["Yuhi Sakaguchi", "Personal Site"]} speed="normal" />
        <AppText
          variant="h4"
          text={<>Graduate Student and Software Engineer</>}
          inputClass="text-align-start accent"
        />
        <AppButton text="Who am I?" onClick={() => navigation("/about")} />
      </div>
    </CoverBackground>
  );
}
