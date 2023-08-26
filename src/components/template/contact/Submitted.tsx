import { useNavigate } from "solid-start";
import Typed from "typed.js";
import { AppButton } from "~/components/atoms/button/Button";
import { Link } from "~/components/atoms/link/Link";
import { AppText, TranslatableText } from "~/components/atoms/text/Text";
import { TypedText } from "~/components/atoms/text/TypedText";
import { CoverBackground } from "~/components/molecules/cover/CoverBackground";

import "./ContactBody.scss";
import "./Submitted.scss";

export function Submitted() {
  const navigation = useNavigate();
  return (
    <>
      <CoverBackground src="/backgrounds/contact-top.jpg">
        <div id="thanks-wrapper">
          <div id="thanks-text">
            <TranslatableText
              translationKey="contact.submitted.thanksMessage"
              variant="h3"
              inputClass="accent text-align-start "
            />
          </div>
          <div class="button-wrapper">
            <AppButton
              key="contact.submitted.backToHome"
              onClick={() => navigation("/")}
            />
          </div>
        </div>
      </CoverBackground>
    </>
  );
}
