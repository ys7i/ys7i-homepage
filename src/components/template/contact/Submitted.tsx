import Typed from "typed.js";
import { AppText } from "~/components/atoms/text/Text";
import { TypedText } from "~/components/atoms/text/TypedText";
import { CoverBackground } from "~/components/molecules/cover/CoverBackground";

import "./ContactBody.scss";

export function Submitted() {
  return (
    <>
      <CoverBackground src="/backgrounds/contact-top.jpg">
        <div class="contact-top">
          <TypedText
            text={[
              "Thank you",
              "I will respond to inquiries that are eligible for a reply within 5 days.",
            ]}
            speed="fast"
            textAlign="center"
          />
        </div>
      </CoverBackground>
    </>
  );
}
