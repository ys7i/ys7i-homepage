import "./TopCover.scss";

import { AppButton } from "~/components/atoms/button/Button";
import { AppText } from "~/components/atoms/text/Text";
import { TypedText } from "~/components/atoms/text/TypedText";
import { CoverBackground } from "~/components/molecules/cover/CoverBackground";
import { useNavigate } from "solid-start";
import { useI18n } from "@solid-primitives/i18n";

export function TopCover() {
  const navigation = useNavigate();
  const [t] = useI18n();
  return (
    <CoverBackground src="/backgrounds/top.jpg" heightVH={90}>
      <div class="top-cover-text">
        <TypedText text={["Yuhi Sakaguchi", "Personal Site"]} speed="normal" />
        <AppText
          variant="h4"
          text={<>Graduate Student and Software Engineer</>}
          inputClass="text-align-start accent"
        />
        <AppButton key="top.whoami" onClick={() => navigation("/about")} />
      </div>
    </CoverBackground>
  );
}
