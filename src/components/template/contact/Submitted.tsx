import { useNavigate } from "solid-start";
import Typed from "typed.js";
import { AppButton } from "~/components/atoms/button/Button";
import { Link } from "~/components/atoms/link/Link";
import { AppText } from "~/components/atoms/text/Text";
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
            <TypedText
              size="small"
              text={[
                "Thank you",
                "I will respond to inquiries that are eligible for a reply within 5 days.",
              ]}
              speed="fast"
              textAlign="start"
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
