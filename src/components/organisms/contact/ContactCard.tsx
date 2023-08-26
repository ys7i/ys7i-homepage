import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { createServerAction$, redirect } from "solid-start/server";
import { fromEnv } from "@aws-sdk/credential-provider-env";

import { AppText, TranslatableText } from "~/components/atoms/text/Text";
import { Textfield } from "~/components/molecules/text-field/Textfield";
import "./ContactCard.scss";
import { Orbit3dLoading } from "~/components/atoms/loading/Orbit3dLoading";
import { AppButton } from "~/components/atoms/button/Button";

export default function ContactCard() {
  const [result, { Form }] = createServerAction$(async (formData: FormData) => {
    const region = import.meta.env.AWS_REGION;

    const createSendEmailCommand = (subject: string, body: string) => {
      const params = {
        Destination: {
          ToAddresses: [import.meta.env.VITE_TO_MAIL ?? ""],
        },
        Message: {
          Body: {
            Text: {
              Charset: "UTF-8",
              Data: body,
            },
          },
          Subject: {
            Charset: "UTF-8",
            Data: subject,
          },
        },
        Source: import.meta.env.FROM_MAIL,
      };
      return new SendEmailCommand(params);
    };

    const sendEmailCommand = createSendEmailCommand(
      `ys7i.com コンタクトページより問い合わせ ${formData.get("subject")}`,
      `名前: ${formData.get("name")}\nメールアドレス:  ${formData.get(
        "email"
      )}\n\n内容> ${formData.get("message")}`
    );

    try {
      const sesClient = new SESClient({
        region,
        credentials: fromEnv(),
      });

      await sesClient.send(sendEmailCommand);
      return redirect("/contact/submitted");
    } catch (e) {
      console.error("Failed to send email.");
      return "failed";
    }
  });
  return (
    <div class="contact-card">
      <div class="contact-contents primary">
        <div class="contact-message">
          <TranslatableText
            variant="p"
            inputClass="text-align-center accent font-medium"
            translationKey="contact.encourageContact"
          />
          <Orbit3dLoading />
        </div>

        <Form class="contact-form">
          <Textfield
            placeholder="contact.form.name"
            id="name"
            isRequired={true}
          />
          <Textfield
            id="email"
            isRequired={true}
            placeholder="contact.form.email"
          />
          <Textfield
            placeholder="contact.form.subject"
            id="subject"
            isRequired={true}
          />
          <Textfield
            isTextArea={true}
            id="message"
            isRequired={true}
            placeholder="contact.form.message"
          />
          <AppButton type="submit" key="contact.form.submit" />
        </Form>
      </div>
    </div>
  );
}
