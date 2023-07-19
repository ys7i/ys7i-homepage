import { Meta, Title } from "solid-start";
import { ContactBody } from "~/components/template/contact/ContactBody";

export default function Contact() {
  return (
    <main>
      <Title>ys7i.com Contact Page</Title>
      <Meta
        name="og:description"
        content="Contact Page of Yuhi Sakaguchi Personal Site. I will respond to inquiries that are eligible for a reply within
        5 days."
      />
      <ContactBody />
    </main>
  );
}
