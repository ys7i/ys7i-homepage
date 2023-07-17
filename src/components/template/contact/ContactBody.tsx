import { TypedText } from "~/components/atoms/text/TypedText";
import { CoverBackground } from "~/components/molecules/cover/CoverBackground";
import ContactCard from "~/components/organisms/contact/ContactCard";

import "./ContactBody.scss";

export function ContactBody() {
  return (
    <>
      <CoverBackground src="/backgrounds/contact-top.jpg">
        <div class="contact-top">
          <TypedText text={["Contact"]} speed="normal" />
        </div>
      </CoverBackground>
      <ContactCard />
    </>
  );
}
